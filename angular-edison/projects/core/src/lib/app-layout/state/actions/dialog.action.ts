// import { Action } from '@ngrx/store';
import { Action } from './action.interface';
import { CoreAppLayoutActionType } from './app-layout-action-type.enum';

export class DialogClose implements Action {
  public readonly type: CoreAppLayoutActionType = CoreAppLayoutActionType.DialogClose;

  constructor(public readonly payload?: any) { }
}

export class DialogOpen implements Action {
  public readonly type: CoreAppLayoutActionType = CoreAppLayoutActionType.DialogOpen;

  constructor(public readonly originatedFrom: any, public readonly payload?: any) { }
}

export class DialogSuccess implements Action {
  public readonly type: CoreAppLayoutActionType = CoreAppLayoutActionType.DialogSuccess;

  constructor(public readonly payload?: any) { }
}
