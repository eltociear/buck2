/*
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under both the MIT license found in the
 * LICENSE-MIT file in the root directory of this source tree and the Apache
 * License, Version 2.0 found in the LICENSE-APACHE file in the root directory
 * of this source tree.
 */

use std::sync::Arc;

use async_trait::async_trait;
use buck2_common::executor_config::HybridExecutionLevel;
use buck2_common::executor_config::RemoteExecutorUseCase;
use buck2_common::liveliness_manager::LivelinessManager;
use buck2_events::dispatch::EventDispatcher;
use buck2_execute::execute::claim::ClaimManager;
use buck2_execute::execute::claim::MutexClaimManager;
use buck2_execute::execute::manager::CommandExecutionManager;
use buck2_execute::execute::name::ExecutorName;
use buck2_execute::execute::prepared::PreparedCommand;
use buck2_execute::execute::prepared::PreparedCommandExecutor;
use buck2_execute::execute::request::ExecutorPreference;
use buck2_execute::execute::result::CommandExecutionResult;
use buck2_execute::execute::result::CommandExecutionStatus;
use futures::future::Either;
use futures::FutureExt;
use gazebo::prelude::*;
use remote_execution as RE;

use crate::executors::local::LocalExecutor;
use crate::executors::re::ReExecutor;

/// The [HybridExecutor] will accept requests and dispatch them to both a local and remote delegate
/// executor, unless the CommandExecutionRequest expresses a preference. That will allow them to
/// race and whichever claims the request first will get to execute it.
///
/// If the remote executor claims the request but does not produce a successful response, we will
/// enqueue the request again to the local executor.
pub struct HybridExecutor {
    pub local: LocalExecutor,
    pub remote: ReExecutor,
    pub level: HybridExecutionLevel,
    pub executor_preference: ExecutorPreference,
}

impl HybridExecutor {
    async fn local_exec_cmd(
        &self,
        command: &PreparedCommand<'_, '_>,
        claim_manager: Box<dyn ClaimManager>,
        events: EventDispatcher,
        liveliness_manager: Arc<dyn LivelinessManager>,
    ) -> CommandExecutionResult {
        let local_manager = CommandExecutionManager::new(
            self.local.name(),
            claim_manager,
            events,
            liveliness_manager,
        );
        self.local.exec_cmd(command, local_manager).await
    }

    async fn remote_exec_cmd(
        &self,
        command: &PreparedCommand<'_, '_>,
        claim_manager: Box<dyn ClaimManager>,
        events: EventDispatcher,
        liveliness_manager: Arc<dyn LivelinessManager>,
    ) -> CommandExecutionResult {
        let remote_manager = CommandExecutionManager::new(
            self.remote.name(),
            claim_manager,
            events,
            liveliness_manager,
        );
        self.remote.exec_cmd(command, remote_manager).await
    }
}

#[async_trait]
impl PreparedCommandExecutor for HybridExecutor {
    async fn exec_cmd(
        &self,
        command: &PreparedCommand<'_, '_>,
        manager: CommandExecutionManager,
    ) -> CommandExecutionResult {
        // inspect that and construct our own result. Especially in the case of secondary fallback,
        // the current approach effectively loses the data from the primary result (for example, we
        // should have stage events the reflect the full duration not just the fallback part).

        // Note that this only sets up these futures, nothing will happen until they are awaited (this is important in the
        // case where we shouldn't be sending one of them).
        let claim_manager = MutexClaimManager::new();

        let local_result = self.local_exec_cmd(
            command,
            box claim_manager.dupe(),
            manager.events.dupe(),
            manager.liveliness_manager.dupe(),
        );
        let remote_result = self.remote_exec_cmd(
            command,
            box claim_manager.dupe(),
            manager.events.dupe(),
            manager.liveliness_manager.dupe(),
        );

        let executor_preference = self
            .executor_preference
            .and(&command.request.executor_preference());

        if executor_preference.requires_local()
            || self.remote.is_action_too_large(&command.action_paths)
        {
            return local_result.await;
        };

        let local_result = local_result.left_future();
        let remote_result = remote_result.right_future();

        let (primary, secondary) = if executor_preference.prefers_local() {
            (local_result, remote_result)
        } else {
            (remote_result, local_result)
        };

        let (fallback_only, fallback_on_failure) = match self.level {
            HybridExecutionLevel::Limited => return primary.await,
            HybridExecutionLevel::Fallback {
                fallback_on_failure,
            } => (true, fallback_on_failure),
            HybridExecutionLevel::Full {
                fallback_on_failure,
            } => (false, fallback_on_failure),
        };

        let is_retryable_status = move |r: &CommandExecutionResult| {
            match &r.report.status {
                // This doesn't really matter since ClaimRejected will not be returned before we
                // drop the Claim (or release it) here, so in practice we'll never see this on the
                // first command.
                CommandExecutionStatus::ClaimRejected => false,
                // This does need be retried since if we get a cancelled claim that would typically
                // mean the other result asked for cancellation and we're about to receive the
                // result here.
                CommandExecutionStatus::ClaimCancelled => true,
                // If the execution is successful, use the result.
                CommandExecutionStatus::Success { .. } => false,
                // Retry commands that failed (i.e. exit 1) only if we're instructed to do so.
                CommandExecutionStatus::Failure { .. } => fallback_on_failure,
                // Errors are infra errors and are always retried because that is the point of
                // falling back.
                CommandExecutionStatus::Error { .. } | CommandExecutionStatus::TimedOut { .. } => {
                    true
                }
            }
        };

        futures::pin_mut!(primary);
        futures::pin_mut!(secondary);

        let (mut first_res, second) = if fallback_only {
            // In the fallback-only case, the primary always "wins" the race, since we don't start
            // the secondary.
            (primary.await, Either::Right(secondary))
        } else {
            // In the full-hybrid case, we do race both executors.
            Either::factor_first(futures::future::select(primary, secondary).await)
        };

        if is_retryable_status(&first_res) {
            // If the first result had made a claim, then cancel it now to let the other result
            // proceed.
            if let Some(claim) = first_res.report.claim.take() {
                claim.release();
            }
            let mut second_res = second.await;
            second_res.rejected_execution = Some(first_res.report);
            second_res
        } else {
            // Everyone is happy, we got our result.
            first_res
        }
    }

    fn re_platform(&self) -> Option<&RE::Platform> {
        self.remote.re_platform()
    }

    fn re_use_case(&self) -> RemoteExecutorUseCase {
        self.remote.re_use_case()
    }

    fn name(&self) -> ExecutorName {
        match self.level {
            HybridExecutionLevel::Limited => ExecutorName("limited-hybrid"),
            HybridExecutionLevel::Fallback { .. } => ExecutorName("fallback-hybrid"),
            HybridExecutionLevel::Full { .. } => ExecutorName("hybrid"),
        }
    }
}
