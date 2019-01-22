import { Observable } from 'rxjs';

import { NavItemPrimaryInterface, NavItemSecondaryInterface } from '../../../app-state/models';

export interface NavItemsServiceInterface {
  getPrimaryNavItems(): Observable<NavItemPrimaryInterface[]>;
  getSecondaryNavItems(): Observable<{ [categoryId: string]: NavItemSecondaryInterface[] }>;
}
