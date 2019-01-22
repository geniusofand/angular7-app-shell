export { OssAppLayoutActionType } from './oss-app-layout-action-type.enum';

import { DialogClose, DialogOpen, DialogSuccess } from './dialog.action';
import { NavItemsLoad, NavItemsLoadCompleted, NavItemsLoadFailed } from './nav-items.action';

export { DialogClose, DialogOpen, DialogSuccess } from './dialog.action';
export { NavItemsLoad, NavItemsLoadCompleted, NavItemsLoadFailed } from './nav-items.action';

export type OssAppLayoutActions =

  DialogClose |
  DialogOpen |
  DialogSuccess |

  NavItemsLoad |
  NavItemsLoadCompleted |
  NavItemsLoadFailed;
