import { NavCategoryId } from './nav-category-ids.enum';
import { NavItemPrimary } from './nav-item-primary.model';
import { NavItemSecondary } from './nav-item-secondary.model';
import { CoreAppRoute } from '../../constants';

// import { AppScopes } from 'app/core/authentication/models/scopes.enum';

export class UsersNavItem extends NavItemPrimary {
  constructor() {
    super({
      labelId: 'Settings', // '$nav_primary_user',
      categoryId: NavCategoryId.USER,
      categoryIcon: 'ico-nav-user.svg',
      route: CoreAppRoute.user,
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
      route: CoreAppRoute.userPreferences,
      categoryId: NavCategoryId.USER,
    });
  }
}
