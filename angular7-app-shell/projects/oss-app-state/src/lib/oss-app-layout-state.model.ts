import { NavItemPrimaryInterface } from './models/nav-items/nav-item-primary.model';
import { NavItemSecondaryInterface } from './models/nav-items/nav-item-secondary.model';

export interface OssAppLayoutStateInterface {
  dialog?: any;
  primaryNavItems?: NavItemPrimaryInterface[];
  secondaryNavItems?: { [categoryId: string]: NavItemSecondaryInterface[] };
}

export class OssAppLayoutState implements OssAppLayoutStateInterface {
  public dialog?: any;
  public primaryNavItems?: NavItemPrimaryInterface[];
  public secondaryNavItems?: { [categoryId: string]: NavItemSecondaryInterface[] };

  constructor({
    dialog = undefined,
    primaryNavItems = undefined,
    secondaryNavItems = undefined,
    }: OssAppLayoutStateInterface) {
    this.dialog = dialog;
    this.primaryNavItems = primaryNavItems;
    this.secondaryNavItems = secondaryNavItems;
  }
}
