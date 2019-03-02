import { NavCategoryId } from './nav-category-ids.enum';

export interface NavItemInterface {
  labelId?: string;
  categoryId?: NavCategoryId;
  route?: string;
}

export class NavItem implements NavItemInterface {
  public labelId?: string;
  public categoryId?: NavCategoryId;
  public route?: string;

  constructor({
    labelId = undefined,
    categoryId = undefined,
    route = undefined,
    }: NavItemInterface) {
    this.labelId = labelId;
    this.categoryId = categoryId;
    this.route = route;
  }
}
