import { NavItemPrimaryInterface, NavItemSecondaryInterface } from '@geniusofand/oss-app-state';
import { Observable } from 'rxjs';

export interface NavItemsServiceInterface {
  getPrimaryNavItems(): Observable<NavItemPrimaryInterface[]>;
  getSecondaryNavItems(): Observable<{ [categoryId: string]: NavItemSecondaryInterface[] }>;
}
