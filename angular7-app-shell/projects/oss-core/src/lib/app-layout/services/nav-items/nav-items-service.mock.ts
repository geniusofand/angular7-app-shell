import { ValueProvider } from '@angular/core';
import { Observable, of } from 'rxjs';

import { MyPreferencesNavItem } from '../../models';

import { NavItemPrimaryInterface, NavItemSecondaryInterface } from '../../../app-state/models';

import { NavItemsServiceInterface } from './nav-items-service.interface';
import { NavItemsService } from './nav-items.service';

export class NavItemsServiceStub implements NavItemsServiceInterface {
  constructor(private readonly _alwaysError: boolean = false) { }

  public getPrimaryNavItems(): Observable<NavItemPrimaryInterface[]> {
    if (this._alwaysError) {
      throw new Error();
    }

    const items: NavItemPrimaryInterface[] = [
      new MyPreferencesNavItem(),
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
