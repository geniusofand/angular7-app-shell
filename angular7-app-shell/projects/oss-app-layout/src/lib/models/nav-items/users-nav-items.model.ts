import { NavCategoryId, NavItemPrimary, NavItemSecondary } from '@geniusofand/oss-app-state';

import { OssAppRoute } from '../../constants/index';

// import { AppScopes } from 'app/core/authentication/models/scopes.enum';

export class UsersNavItem extends NavItemPrimary {
  constructor() {
    super({
      labelId: 'Settings', // '$nav_primary_user',
      categoryId: NavCategoryId.USER,
      categoryIcon: 'ico-nav-user.svg',
      route: OssAppRoute.user,
      menuItems: [
        new MyPreferencesNavItem(),
      ],
    });
  }
}

export class MyPreferencesNavItem extends NavItemSecondary {
  constructor() {
    super({
      labelId: 'My preferences', // '$users_system_users_nav_secondary_dashboard',
      // scopes: [
        // AppScopes.USER_ACTIONS,
        // AppScopes.USER_PROFILE,
        // AppScopes.PROFILE_EDIT,
      // ],
      route: OssAppRoute.userPreferences,
      categoryId: NavCategoryId.USER,
    });
  }
}
