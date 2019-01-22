import { Injectable } from '@angular/core';
import { NavItemPrimaryInterface, NavItemSecondaryInterface } from '@geniusofand/oss-app-state';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, exhaustMap, filter, map, switchMap } from 'rxjs/operators';

import { UsersNavItem } from '../models';

import { NavItemsLoad, NavItemsLoadCompleted, NavItemsLoadFailed, OssAppLayoutActionType } from './actions';

@Injectable()
export class OssAppLayoutEffects {

  /**
   * Load Navigation items from the provided token scopes
   */
  @Effect()
  public loadNavItems$: Observable<Action> = this._actions$
    .pipe(
      ofType(OssAppLayoutActionType.LoadNavItems),
      map((action: NavItemsLoad) => action.payload),
      switchMap((jwt: string) => {
        // const decryptedToken: any = jwtDecode(jwt);
        // const scopes: string[] = JSON.parse(decryptedToken.scopes);

        // Start with all possible navigation elements and filter based on token scopes.
        const primaryNavItems: Readonly<NavItemPrimaryInterface[]> = [
          new UsersNavItem(),
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

        return of(filteredItems);
      }),
      map((items: NavItemPrimaryInterface[]) => new NavItemsLoadCompleted(items, true)),
      catchError((err: any) => {
        console.log(`FAILED: ${err}`);
        return of(new NavItemsLoadFailed(err));
      }));

  constructor(private readonly _actions$: Actions) {}

}
