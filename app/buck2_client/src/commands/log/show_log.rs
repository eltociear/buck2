/*
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under both the MIT license found in the
 * LICENSE-MIT file in the root directory of this source tree and the Apache
 * License, Version 2.0 found in the LICENSE-APACHE file in the root directory
 * of this source tree.
 */

use buck2_client_ctx::client_ctx::ClientCommandContext;
use buck2_client_ctx::exit_result::ExitResult;
use buck2_client_ctx::stdio;
use buck2_client_ctx::subscribers::event_log::options::EventLogOptions;
use buck2_client_ctx::subscribers::event_log::SerializeForLog;
use tokio::runtime;
use tokio_stream::StreamExt;

/// This command outputs the most recent log in JSON format
#[derive(Debug, clap::Parser)]
pub struct ShowLogCommand {
    #[clap(flatten)]
    event_log: EventLogOptions,
}

impl ShowLogCommand {
    pub fn exec(self, _matches: &clap::ArgMatches, ctx: ClientCommandContext) -> ExitResult {
        let Self { event_log } = self;

        let log_path = event_log.get(&ctx)?;

        let rt = runtime::Builder::new_current_thread()
            .enable_all()
            .build()?;

        rt.block_on(async move {
            let (invocation, mut events) = log_path.unpack_stream().await?;

            let mut buf = Vec::new();
            invocation.serialize_to_json(&mut buf)?;
            stdio::print_bytes(&buf)?;
            stdio::print_bytes(b"\n")?;
            while let Some(event) = events.try_next().await? {
                buf.clear();
                event.as_ref().serialize_to_json(&mut buf)?;
                stdio::print_bytes(&buf)?;
                stdio::print_bytes(b"\n")?;
            }

            anyhow::Ok(())
        })?;
        ExitResult::success()
    }
}