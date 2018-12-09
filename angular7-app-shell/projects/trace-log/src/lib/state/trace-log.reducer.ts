import { ActionReducer } from '@ngrx/store';

// import { AppStateInterface } from 'app/core/app-config/state/models/app-state.interface';
export interface AppStateInterface {
  // error: ErrorStateInterface;
  // router: RouterReducerState<RouterStateUrlInterface>;
  // survey: SurveyStateInterface;
  // auth: AuthStateInterface;
  // user: UserStateInterface;
  // task: TaskStateInterface;
  // navItems: NavItemsStateInterface;
  // managementOverview: ManagementOverviewStateInterface;
  // recommendation: RecommendationStateInterface;
  booleanToggle: boolean;
}

export function traceLogReducer(reducer: ActionReducer<AppStateInterface>): ActionReducer<AppStateInterface> {
  return function (state: AppStateInterface, action: any): AppStateInterface {
    console.groupCollapsed('App state');
    console.log('state', state);
    console.log('action', action);
    console.groupEnd();

    return reducer(state, action);
  }
}

