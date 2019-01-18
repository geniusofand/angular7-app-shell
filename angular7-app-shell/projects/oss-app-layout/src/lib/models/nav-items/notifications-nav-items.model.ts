import { NavCategoryId, NavItemPrimary, NavItemSecondary } from '@geniusofand/oss-app-state';

import { OssAppRoute } from '../../constants/index';

// import { AppScopes } from 'app/core/authentication/models/scopes.enum';

export class NotificationsNavItem extends NavItemPrimary {
  constructor() {
    super({
      labelId: 'Notifications',
      route: OssAppRoute.noOp,
      categoryId: NavCategoryId.NOTIFICATIONS,
      categoryIcon: 'ico-nav-notifications.svg',
      // menuItems: [
      //   new NotificationsPlaceholderNavItem(),
      // ],
    });
  }
}

// export class NotificationsPlaceholderNavItem extends NavItemSecondary {
//   constructor() {
//     super({
//       labelId: 'Placeholder',
//       route: OssAppRoute.noOp,
//       scopes: [
//         // AppScopes.AUTOMATIC_EMAILS,
//       ],
//       categoryId: NavCategoryId.NOTIFICATIONS,
//     });
//   }
// }
