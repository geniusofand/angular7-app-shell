import { Action } from '@ngrx/store';

import { OssAppLayoutActionType } from './oss-app-layout-action-type.enum';

export class NavItemsLoad implements Action {
  public readonly type: OssAppLayoutActionType = OssAppLayoutActionType.LoadNavItems;

  constructor(public readonly payload?: any) { }
}

export class NavItemsLoadCompleted implements Action {
  public readonly type: OssAppLayoutActionType = OssAppLayoutActionType.LoadNavItemsCompleted;

  constructor(public readonly payload?: any, public readonly appendNavItems?: boolean) { }
}

export class NavItemsLoadFailed implements Action {
  public readonly type: OssAppLayoutActionType = OssAppLayoutActionType.LoadNavItemsFailed;

  constructor(public readonly payload?: any) { }
}
