import { NavCategoryId } from './nav-category-ids.enum';
import { NavItemPrimary } from './nav-item-primary.model';
import { NavItemSecondary } from './nav-item-secondary.model';
import { CoreAppRoute } from '../../constants';

// import { AppScopes } from 'app/core/authentication/models/scopes.enum';

export class NotificationsNavItem extends NavItemPrimary {
  constructor() {
    super({
      labelId: 'Notifications',
      route: CoreAppRoute.noOp,
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
