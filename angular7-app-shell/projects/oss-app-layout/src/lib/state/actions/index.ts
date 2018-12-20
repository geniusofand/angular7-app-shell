import {
  DialogClose,
  DialogOpen,
  DialogSuccess,
} from './dialog.action';

export { OssAppLayoutActionType } from './oss-app-layout-action-type.enum';

export { DialogClose, DialogOpen, DialogSuccess } from './dialog.action';

export type OssAppLayoutActions =

  DialogClose |
  DialogOpen |
  DialogSuccess;
