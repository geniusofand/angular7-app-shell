import { NavCategoryId } from './nav-category-ids.enum';
import { NavItemPrimary } from './nav-item-primary.model';
import { NavItemSecondary } from './nav-item-secondary.model';
import { CoreAppRoute } from '../../constants';

// import { AppScopes } from 'app/core/authentication/models/scopes.enum';

export class AdminNavItem extends NavItemPrimary {
  constructor() {
    super({
      labelId: 'Admin',
      categoryId: NavCategoryId.ADMIN,
      categoryIcon: 'ico-nav-admin.svg',
      route: CoreAppRoute.noOp,
      // menuItems: [
      //   new AdminPlaceholderNavItem(),
      // ],
    });
  }
}

// export class AdminPlaceholderNavItem extends NavItemSecondary {
//   constructor() {
//     super({
//       labelId: 'Placeholder',
//       scopes: [
//         'admin', // AppScopes.ADMIN,
//       ],
//       route: OssAppRoute.noOp,
//       categoryId: NavCategoryId.ADMIN,
//     });
//   }
// }
