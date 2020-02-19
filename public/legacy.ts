import { PluginInitializerContext } from 'kibana/public';
import { npSetup, npStart } from 'ui/new_platform';

import { setup as visualizationsSetup } from '../../../src/legacy/core_plugins/visualizations/public/np_ready/public/legacy';
import { UiStateIssuesVisPluginSetupDependencies } from './plugin';
import { plugin } from '.';

const plugins: Readonly<UiStateIssuesVisPluginSetupDependencies> = {
  visualizations: visualizationsSetup,
};

const pluginInstance = plugin({} as PluginInitializerContext);

export const setup = pluginInstance.setup(npSetup.core, plugins);
export const start = pluginInstance.start(npStart.core);
