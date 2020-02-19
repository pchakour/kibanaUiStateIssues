import chrome from 'ui/chrome';
import { Query, IIndexPattern } from '../../../src/plugins/data/public';
import { Filter } from '../../../src/plugins/data/common/es_query/filters';

interface UiStateIssuesRequestHandlerParams {
  query: Query;
  filters: Filter;
  visParams: any;
  index: IIndexPattern;
  uiState: any;
}

const uiStateIssuesRequestHandler = async ({
  visParams,
  query,
  filters,
  index,
  uiState,
}: UiStateIssuesRequestHandlerParams) => {
  const $injector = await chrome.dangerouslyGetActiveInjector();
  const $rootScope = $injector.get<any>('$rootScope');
  let persistedState = uiState;

  if ($rootScope.$$childTail.uiState) {
    persistedState = $rootScope.$$childTail.uiState;
  }

  return {
    uiStateColorFromParams: uiState.get('color'),
    uiStateColorFromScope: persistedState.get('color'),
  };
};

export { uiStateIssuesRequestHandler };
