export { Action } from './action.interface';
export { CoreAppLayoutActionType } from './app-layout-action-type.enum';

import { DialogClose, DialogOpen, DialogSuccess } from './dialog.action';
import { NavItemsAppend, NavItemsLoad, NavItemsLoadCompleted, NavItemsLoadFailed } from './nav-items.action';

export { DialogClose, DialogOpen, DialogSuccess } from './dialog.action';
export { NavItemsAppend, NavItemsLoad, NavItemsLoadCompleted, NavItemsLoadFailed } from './nav-items.action';

export type CoreAppLayoutActions =

  DialogClose |
  DialogOpen |
  DialogSuccess |

  NavItemsAppend |
  NavItemsLoad |
  NavItemsLoadCompleted |
  NavItemsLoadFailed;
