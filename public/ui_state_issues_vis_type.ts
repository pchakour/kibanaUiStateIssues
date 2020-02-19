// @ts-ignore
import { AngularVisController } from 'ui/vis/vis_types/angular_vis_type';

// Controllers
import './controller/ui_state_issues_vis_controller';

// Templates
import template from './template/ui_state_issues_vis.html';

// Icon
import image from './icon.svg';

import { uiStateIssuesRequestHandler } from './request_handler';
import { uiStateIssuesResponseHandler } from './response_handler';

export const uiStateIssuesVisTypeDefinition = {
  name: 'ui_sate_issues',
  title: 'UiStateIssues',
  image,
  description: 'Show issues with ui state and angular controller',
  visualization: AngularVisController,
  visConfig: {
    defaults: {},
    template,
  },
  requestHandler: uiStateIssuesRequestHandler,
  responseHandler: uiStateIssuesResponseHandler,
};
