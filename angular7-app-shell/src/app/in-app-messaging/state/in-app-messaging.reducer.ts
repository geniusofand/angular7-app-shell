import { AppStateInterface } from '@geniusofand/oss-app-state';
import { OssAppLayoutState, OssAppLayoutStateInterface } from '@geniusofand/oss-app-state';

import {OssAppLayoutActions} from '../../../../projects/oss-app-layout/src/lib/state/actions';

const initialState: OssAppLayoutState = new OssAppLayoutState({});

export function inAppMessagingReducer(state: OssAppLayoutStateInterface = initialState,
                                    action: OssAppLayoutActions): OssAppLayoutStateInterface {
  switch (action.type) {

    default:
      // return {
      //   ...state,
      //   ids: [],
      //   tasks: {},
      // };
      return state;
  }
}
