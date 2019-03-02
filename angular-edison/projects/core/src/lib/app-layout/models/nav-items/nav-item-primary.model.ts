import { NavItem, NavItemInterface } from './nav-item.model';
import { NavItemSecondaryInterface } from './nav-item-secondary.model';

export interface NavItemPrimaryInterface extends NavItemInterface {
  categoryIcon?: string;
  menuItems?: NavItemSecondaryInterface[];
}

export abstract class NavItemPrimary extends NavItem implements NavItemPrimaryInterface {
  public labelId?: string;
  public displayOrder?: number;
  public categoryIcon?: string;
  public menuItems?: NavItemSecondaryInterface[];

  constructor({
    categoryIcon = undefined,
    menuItems = undefined,
    }: NavItemPrimaryInterface) {
    super(arguments[0]);
    this.categoryIcon = categoryIcon;
    this.menuItems = menuItems;
  }
}
