// import { Action } from '@ngrx/store';
import { Action } from './action.interface';
import { CoreAppLayoutActionType } from './app-layout-action-type.enum';

export class NavItemsAppend implements Action {
  public readonly type: CoreAppLayoutActionType = CoreAppLayoutActionType.AppendNavItems;

  constructor(public readonly payload?: any) { }
}

export class NavItemsLoad implements Action {
  public readonly type: CoreAppLayoutActionType = CoreAppLayoutActionType.LoadNavItems;

  constructor(public readonly payload?: any) { }
}

export class NavItemsLoadCompleted implements Action {
  public readonly type: CoreAppLayoutActionType = CoreAppLayoutActionType.LoadNavItemsCompleted;

  constructor(public readonly payload?: any, public readonly appendNavItems?: boolean) { }
}

export class NavItemsLoadFailed implements Action {
  public readonly type: CoreAppLayoutActionType = CoreAppLayoutActionType.LoadNavItemsFailed;

  constructor(public readonly payload?: any) { }
}
