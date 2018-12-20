import { AppStateInterface } from '@geniusofand/oss-app-state';
import { OssAppLayoutState, OssAppLayoutStateInterface } from '@geniusofand/oss-app-state';

import { OssAppLayoutActions, OssAppLayoutActionType } from './actions';

const initialState: OssAppLayoutState = new OssAppLayoutState({});

export function ossAppLayoutReducer(state: OssAppLayoutStateInterface = initialState,
                                    action: OssAppLayoutActions): OssAppLayoutStateInterface {
  switch (action.type) {

    // Handle retrieving a fresh load
    case OssAppLayoutActionType.DialogClose:
    case OssAppLayoutActionType.DialogOpen:
    case OssAppLayoutActionType.DialogSuccess:
      // return {
      //   ...state,
      //   ids: [],
      //   tasks: {},
      // };
      return state;

    default:
      return state;
  }
}
