import { NavCategoryId, NavItemPrimary, NavItemSecondary } from '@geniusofand/angular-edison-core';

import { AppRoute } from '../../constants';

// import { AppScopes } from 'app/core/authentication/models/scopes.enum';

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
