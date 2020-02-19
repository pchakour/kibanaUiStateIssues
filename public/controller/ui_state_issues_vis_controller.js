import { uiModules } from 'ui/modules';

/**
 * Controller declaration
 */
function controller($scope) {
  const UI_STATE_KEY = 'color';
  const COLORS = {
    BLUE: '#CBF8F8',
    GREEN: '#E6F8CB',
  };

  $scope.buttonColor = COLORS.BLUE;
  $scope.buttonStyle = {
    padding: '10px',
    'background-color': '#f0f0f0',
  };

  $scope.colorControllerStyle = {
    border: '1px solid #f0f0f0',
    padding: '10px',
    'margin-top': '10px',
    'background-color': 'transparent',
  };

  $scope.colorRequestHandlerRootScopeStyle = {
    border: '1px solid #f0f0f0',
    padding: '10px',
    'margin-top': '10px',
    'background-color': 'transparent',
  };

  $scope.colorRequestHandlerParamsStyle = {
    border: '1px solid #f0f0f0',
    padding: '10px',
    'margin-top': '10px',
    'background-color': 'transparent',
  };

  $scope.clicked = () => {
    const currentColor = $scope.uiState.get(UI_STATE_KEY);
    const newColor = currentColor === COLORS.GREEN ? COLORS.BLUE : COLORS.GREEN;
    $scope.vis.uiStateVal(UI_STATE_KEY, newColor);

    // Unfortunately, we have to force an update to call our handler now
    $scope.vis.updateState();
  };

  $scope.$watch('esResponse', esResponse => {
    $scope.colorRequestHandlerRootScopeStyle['background-color'] = esResponse.uiStateColorFromScope;
    $scope.colorRequestHandlerParamsStyle['background-color'] = esResponse.uiStateColorFromParams;
    $scope.colorControllerStyle['background-color'] = $scope.uiState.get(UI_STATE_KEY);
  });
}

uiModules
  .get('kibi_timeline_vis/kibi_timeline_vis', ['kibana'])
  .controller('UiStateIssuesController', controller);
