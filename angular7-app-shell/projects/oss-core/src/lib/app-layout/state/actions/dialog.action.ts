import { Action } from '@ngrx/store';

import { OssAppLayoutActionType } from './oss-app-layout-action-type.enum';

export class DialogClose implements Action {
  public readonly type: OssAppLayoutActionType = OssAppLayoutActionType.DialogClose;

  constructor(public readonly payload?: any) { }
}

export class DialogOpen implements Action {
  public readonly type: OssAppLayoutActionType = OssAppLayoutActionType.DialogOpen;

  constructor(public readonly originatedFrom: any, public readonly payload?: any) { }
}

export class DialogSuccess implements Action {
  public readonly type: OssAppLayoutActionType = OssAppLayoutActionType.DialogSuccess;

  constructor(public readonly payload?: any) { }
}
