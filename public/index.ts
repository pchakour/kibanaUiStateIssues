import { PluginInitializerContext } from '../../../src/core/public';
import { UiStateIssuesVisPlugin as Plugin } from './plugin';

export function plugin(initializerContext: PluginInitializerContext) {
  return new Plugin(initializerContext);
}
