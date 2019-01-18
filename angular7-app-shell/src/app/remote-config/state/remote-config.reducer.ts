import { AppStateInterface } from '@geniusofand/oss-app-state';
import { OssAppLayoutState, OssAppLayoutStateInterface } from '@geniusofand/oss-app-state';

import { OssAppLayoutActions } from '../../../../projects/oss-app-layout/src/lib/state/actions';
import { RemoteConfigState, RemoteConfigStateInterface } from '../../../../projects/oss-app-state/src/lib/remote-config-state.model';

const initialState: RemoteConfigState = new RemoteConfigState({});

export function remoteConfigReducer(state: RemoteConfigStateInterface = initialState,
                                    action: OssAppLayoutActions): RemoteConfigStateInterface {
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
