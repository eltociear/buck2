/*
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under both the MIT license found in the
 * LICENSE-MIT file in the root directory of this source tree and the Apache
 * License, Version 2.0 found in the LICENSE-APACHE file in the root directory
 * of this source tree.
 */

use std::sync::Arc;

use allocative::Allocative;
use async_trait::async_trait;
use buck2_common::result::SharedResult;
use buck2_core::cells::name::CellName;
use buck2_core::configuration::ConfigurationData;
use buck2_core::target::label::ConfiguredTargetLabel;
use buck2_core::target::label::TargetLabel;
use buck2_node::configuration::execution::ExecutionPlatform;
use buck2_node::configuration::execution::ExecutionPlatformResolution;
use buck2_node::configuration::resolved::ConfigurationNode;
use buck2_node::configuration::resolved::ResolvedConfiguration;
use buck2_node::configuration::toolchain_constraints::ToolchainConstraints;
use indexmap::IndexSet;

pub mod calculation;

pub type ExecutionPlatforms = Arc<ExecutionPlatformsData>;

#[derive(Debug, Allocative)]
pub enum ExecutionPlatformFallback {
    Error,
    UseUnspecifiedExec,
    Platform(ExecutionPlatform),
}

#[derive(Debug, Allocative)]
pub struct ExecutionPlatformsData {
    platforms: Vec<ExecutionPlatform>,
    fallback: ExecutionPlatformFallback,
}

impl ExecutionPlatformsData {
    pub fn new(platforms: Vec<ExecutionPlatform>, fallback: ExecutionPlatformFallback) -> Self {
        Self {
            platforms,
            fallback,
        }
    }

    pub fn candidates(&self) -> impl Iterator<Item = &ExecutionPlatform> {
        self.platforms.iter()
    }

    pub fn fallback(&self) -> &ExecutionPlatformFallback {
        &self.fallback
    }
}

#[async_trait]
pub trait ConfigurationCalculation {
    async fn get_default_platform(&self, target: &TargetLabel) -> SharedResult<ConfigurationData>;

    async fn get_platform_configuration(
        &self,
        target: &TargetLabel,
    ) -> anyhow::Result<ConfigurationData>;

    async fn get_resolved_configuration<'a, T: Iterator<Item = &'a TargetLabel> + Send>(
        &self,
        target_cfg: &ConfigurationData,
        target_node_cell: CellName,
        configuration_deps: T,
    ) -> SharedResult<ResolvedConfiguration>;

    async fn get_configuration_node(
        &self,
        target_cfg: &ConfigurationData,
        target_cell: CellName,
        cfg_target: &TargetLabel,
    ) -> SharedResult<ConfigurationNode>;

    /// Returns a list of the configured execution platforms. This looks up the providers on the target
    /// configured **in the root cell's buckconfig** with key `build.execution_platforms`. If there's no
    /// value configured, it will return `None` which indicates we should fallback to the legacy execution
    /// platform behavior.
    async fn get_execution_platforms(&self) -> SharedResult<Option<ExecutionPlatforms>>;

    /// Gets the compatible execution platforms for a give list of compatible_with constraints and execution deps.
    ///
    /// We do this as a sort of monolithic computation (rather than checking things one-by-one or separating
    /// compatible_with and exec deps) because we expect those values to be common across many nodes (for example,
    /// all c++ targets targeting a specific platform are likely to share compatible_with and exec_deps except
    /// for some rare exceptions). By having a monolithic key like `(Vec<TargetLabel>, Vec<TargetLabel>)` allows all
    /// those nodes to just have a single dice dep. This approach has the downside that it is less incremental, but
    /// we expect these things to change rarely.
    async fn resolve_execution_platform_from_constraints(
        &self,
        target_node_cell: CellName,
        exec_compatible_with: &[TargetLabel],
        exec_deps: &IndexSet<TargetLabel>,
        toolchain_allows: &[ToolchainConstraints],
    ) -> SharedResult<ExecutionPlatformResolution>;

    async fn resolve_toolchain_constraints_from_constraints(
        &self,
        target: &ConfiguredTargetLabel,
        exec_compatible_with: &[TargetLabel],
        exec_deps: &IndexSet<TargetLabel>,
        toolchain_allows: &[ToolchainConstraints],
    ) -> SharedResult<ToolchainConstraints>;
}