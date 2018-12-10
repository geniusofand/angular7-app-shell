import { ActionReducer } from '@ngrx/store';

import { AppStateInterface } from '@geniusofand/oss-app-state';

export function traceLogReducer(reducer: ActionReducer<AppStateInterface>): ActionReducer<AppStateInterface> {
  return function (state: AppStateInterface, action: any): AppStateInterface {
    console.groupCollapsed('App state');
    console.log('state', state);
    console.log('action', action);
    console.groupEnd();

    return reducer(state, action);
  }
}

