import { Injectable } from '@angular/core';
import {
  CoreNavItemsService,
  NavItemPrimaryInterface,
  NavItemSecondaryInterface,
  NavItemsServiceInterface,
} from '@geniusofand/angular-edison-core';
import { Observable } from 'rxjs';

import { FoodNavItem } from '../../models';

@Injectable({
  providedIn: 'root'
})
export class NavItemsService implements NavItemsServiceInterface {

  public primaryNavItems$: Observable<NavItemPrimaryInterface[]>;
  public secondaryNavItems$: Observable<{ [categoryId: string]: NavItemSecondaryInterface[] }>;

  constructor(private readonly coreNavItemsService: CoreNavItemsService) {
    this.primaryNavItems$ = this.coreNavItemsService.primaryNavItems$;
    this.secondaryNavItems$ = this.secondaryNavItems$;
  }

  public loadNavItems(): void {

    // jwt: string;
    // const decryptedToken: any = jwtDecode(jwt);
    // const scopes: string[] = JSON.parse(decryptedToken.scopes);

    this.coreNavItemsService.loadNavItems();

    // Start with all possible navigation elements and filter based on token scopes.
    const primaryNavItems: Readonly<NavItemPrimaryInterface[]> = [
      new FoodNavItem(),
    ];

    const filteredItems: NavItemPrimaryInterface[] = primaryNavItems.filter((item: NavItemPrimaryInterface) => {
      if (!item.menuItems || item.menuItems.length === 0) {
        return false;
      }

      // Filter out any secondaries the user doesn't have permissions to see.
      item.menuItems = item.menuItems.filter((secondaryItem: NavItemSecondaryInterface) => {
        // return AuthService.isTokenAuthorized(scopes, secondaryItem.scopes, secondaryItem.scopeMatch);
        return true;
      });

      // Only return items that have secondaries.
      return item.menuItems.length > 0;
    });

    this.coreNavItemsService.appendPrimaryNavItems(filteredItems);
  }

}

