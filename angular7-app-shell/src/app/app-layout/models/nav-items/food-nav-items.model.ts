import { NavCategoryId, NavItemPrimary, NavItemSecondary } from 'oss-core';

import { AppRoute } from '../../constants/index';

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

export class MyMealsNavItem extends NavItemSecondary {
  constructor() {
    super({
      labelId: 'My meals', // '$users_system_users_nav_secondary_dashboard',
      // scopes: [
      //   AppScopes.USER_ACTIONS,
      //   AppScopes.USER_PROFILE,
      //   AppScopes.PROFILE_EDIT,
      // ],
      route: AppRoute.myMeals,
      categoryId: NavCategoryId.FOOD,
    });
  }
}

export class MyGroceriesNavItem extends NavItemSecondary {
  constructor() {
    super({
      labelId: 'My groceries', // '$users_system_users_nav_secondary_dashboard',
      // scopes: [
      //   AppScopes.USER_ACTIONS,
      //   AppScopes.USER_PROFILE,
      //   AppScopes.PROFILE_EDIT,
      // ],
      route: AppRoute.myGroceries,
      categoryId: NavCategoryId.FOOD,
    });
  }
}
