import { RouterReducerState } from '@ngrx/router-store';

import { OssAppLayoutStateInterface } from './oss-app-layout-state.model';
import { RemoteConfigStateInterface } from './remote-config-state.model';

export interface AppStateInterface {
  // error: ErrorStateInterface;
  ossAppLayout: OssAppLayoutStateInterface;
  remoteConfigState: RemoteConfigStateInterface;
  // router: RouterReducerState<RouterStateUrlInterface>;
  router: RouterReducerState;
  // auth: AuthStateInterface;
  // user: UserStateInterface;
  // navItems: NavItemsStateInterface;
}
