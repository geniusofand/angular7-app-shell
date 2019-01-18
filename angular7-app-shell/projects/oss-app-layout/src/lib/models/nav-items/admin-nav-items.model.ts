import { NavCategoryId, NavItemPrimary, NavItemSecondary } from '@geniusofand/oss-app-state';

import { OssAppRoute } from '../../constants/index';

// import { AppScopes } from 'app/core/authentication/models/scopes.enum';

export class AdminNavItem extends NavItemPrimary {
  constructor() {
    super({
      labelId: 'Admin',
      categoryId: NavCategoryId.ADMIN,
      categoryIcon: 'ico-nav-admin.svg',
      route: OssAppRoute.noOp,
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
