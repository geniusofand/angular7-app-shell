import { Observable } from 'rxjs';

import { NavItemPrimaryInterface, NavItemSecondaryInterface } from '../../models';

export interface NavItemsServiceInterface {
  primaryNavItems$: Observable<NavItemPrimaryInterface[]>;
  secondaryNavItems$: Observable<{ [categoryId: string]: NavItemSecondaryInterface[] }>;
  // getPrimaryNavItems(): Observable<NavItemPrimaryInterface[]>;
  // getSecondaryNavItems(): Observable<{ [categoryId: string]: NavItemSecondaryInterface[] }>;
}
