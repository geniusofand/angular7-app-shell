import { ValueProvider } from '@angular/core';
import { Observable, of } from 'rxjs';

import { NavItemPrimaryInterface, NavItemSecondaryInterface, UsersNavItem } from '../../models';
import { NavItemsServiceInterface } from './nav-items-service.interface';
import { CoreNavItemsService } from './nav-items.service';

export class NavItemsServiceStub implements NavItemsServiceInterface {
  primaryNavItems$: Observable<NavItemPrimaryInterface[]>;
  secondaryNavItems$: Observable<{ [categoryId: string]: NavItemSecondaryInterface[] }>;

  constructor(private readonly _alwaysError: boolean = false) {
    this.primaryNavItems$ = this.getPrimaryNavItems();
    this.selectedSecondaryNavItems$ = this.getSecondaryNavItems();
  }

  public getPrimaryNavItems(): Observable<NavItemPrimaryInterface[]> {
    if (this._alwaysError) {
      throw new Error();
    }

    const items: NavItemPrimaryInterface[] = [
      new UsersNavItem(),
    ];
    return of(items);
  }

  public getSecondaryNavItems(): Observable<{ [categoryId: string]: NavItemSecondaryInterface[] }> {
    if (this._alwaysError) {
      throw new Error();
    }

    const items: { [categoryId: string]: NavItemSecondaryInterface[] } = {
      // home: [new SurveyNavItem()],
      home: [],
    };
    return of(items);
  }

}

export function navItemsServiceStubProvider(alwaysError: boolean = false): ValueProvider {
  return {
    provide: CoreNavItemsService,
    useValue: new NavItemsServiceStub(alwaysError),
  };
}
