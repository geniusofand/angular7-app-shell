import { NavItemPrimaryInterface } from './nav-items/nav-item-primary.model';
import { NavItemSecondaryInterface } from './nav-items/nav-item-secondary.model';

export interface CoreAppLayoutStateInterface {
  dialog?: any;
  primaryNavItems?: NavItemPrimaryInterface[];
  secondaryNavItems?: { [categoryId: string]: NavItemSecondaryInterface[] };
}

export class CoreAppLayoutState implements CoreAppLayoutStateInterface {
  public dialog?: any;
  public primaryNavItems?: NavItemPrimaryInterface[];
  public secondaryNavItems?: { [categoryId: string]: NavItemSecondaryInterface[] };

  constructor({
    dialog = undefined,
    primaryNavItems = undefined,
    secondaryNavItems = undefined,
    }: CoreAppLayoutStateInterface) {
    this.dialog = dialog;
    this.primaryNavItems = primaryNavItems;
    this.secondaryNavItems = secondaryNavItems;
  }
}
