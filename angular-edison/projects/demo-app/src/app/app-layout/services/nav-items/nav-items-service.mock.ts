import { ValueProvider } from '@angular/core';
import {
  NavItemSecondaryInterface, NavItemsServiceInterface, NavItemPrimaryInterface
} from '@geniusofand/angular-edison-core';
import { Observable, of } from 'rxjs';

import { FoodNavItem } from '../../models';
import { NavItemsService } from './nav-items.service';

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
      new FoodNavItem(),
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
    provide: NavItemsService,
    useValue: new NavItemsServiceStub(alwaysError),
  };
}
