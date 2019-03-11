import { NavCategoryId, NavItemPrimary, NavItemSecondary } from '@geniusofand/angular-edison-core';

import { AppRoute } from '../../constants';
import { MyGroceriesNavItem } from './my-groceries-nav-items.model';
import { MyMealsNavItem} from './my-meals-nav-item.model';

// import { AppScopes } from 'app/core/authentication/models/scopes.enum';

export class FoodNavItem extends NavItemPrimary {
  constructor() {
    super({
      labelId: 'Food', // '$nav_primary_food',
      categoryId: NavCategoryId.FOOD,
      categoryIcon: 'ico-nav-food.svg',
      route: AppRoute.food,
      menuItems: [
        new MyMealsNavItem(),
        new MyGroceriesNavItem(),
      ],
    });
  }
}
