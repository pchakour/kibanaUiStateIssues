import { PluginInitializerContext, CoreSetup, CoreStart, Plugin } from '../../../../core/public';
import { VisualizationsSetup } from '../../../src/legacy/core_plugins/visualizations/public';
import { uiStateIssuesVisTypeDefinition } from './ui_state_issues_vis_type';

/** @internal */
export interface UiStateIssuesVisPluginSetupDependencies {
  visualizations: VisualizationsSetup;
}

/** @internal */
export class UiStateIssuesVisPlugin implements Plugin<void, void> {
  initializerContext: PluginInitializerContext;

  constructor(initializerContext: PluginInitializerContext) {
    this.initializerContext = initializerContext;
  }

  public setup(core: CoreSetup, { visualizations }: UiStateIssuesVisPluginSetupDependencies) {
    visualizations.types.createBaseVisualization(uiStateIssuesVisTypeDefinition);
  }

  public start(core: CoreStart) {
    // nothing to do here yet
  }
}
