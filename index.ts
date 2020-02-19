import { resolve } from 'path';
import { Legacy } from 'kibana';

import { LegacyPluginApi, LegacyPluginInitializer } from '../../src/legacy/types';

const uiStateIssuesVisPluginInitializer: LegacyPluginInitializer = ({ Plugin }: LegacyPluginApi) =>
  new Plugin({
    id: 'ui_state_issues',
    require: ['kibana', 'elasticsearch', 'interpreter'],
    publicDir: resolve(__dirname, 'public'),
    uiExports: {
      hacks: [resolve(__dirname, 'public/legacy')],
      injectDefaultVars: server => ({}),
    }
  } as Legacy.PluginSpecOptions);

export default uiStateIssuesVisPluginInitializer;

