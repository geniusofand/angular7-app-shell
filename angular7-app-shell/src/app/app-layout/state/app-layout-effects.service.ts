import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';
import { NavItemPrimaryInterface, NavItemSecondaryInterface } from '@geniusofand/oss-app-state';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, exhaustMap, filter, map, switchMap } from 'rxjs/operators';

import {
  DialogClose, DialogOpen, DialogSuccess,
  NavItemsLoad, NavItemsLoadCompleted, NavItemsLoadFailed,
  OssAppLayoutActionType,
} from 'oss-app-layout';

import { FoodHowItWorksComponent } from '../components/food-how-it-works/food-how-it-works.component';
import { FoodNavItem } from '../models';

@Injectable()
export class AppLayoutEffects {

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

        return of(filteredItems);
      }),
      map((items: NavItemPrimaryInterface[]) => new NavItemsLoadCompleted(items, true)),
      catchError((err: any) => {
        console.log(`FAILED: ${err}`);
        return of(new NavItemsLoadFailed(err));
      }));

  @Effect()
  public openDialog$: Observable<Action> = this._actions$
    .pipe(
      ofType(OssAppLayoutActionType.DialogOpen),
      filter((action: DialogOpen) => action.originatedFrom != null),
      exhaustMap((action: DialogOpen) => {
        let componentClass: any;
        switch (action.originatedFrom) {
          case 'OssSidenavPrimaryNavComponent.HowItWorks':
            componentClass = FoodHowItWorksComponent;
            break;
        }
        const dialogRef = this.dialog.open(componentClass, {
          data: action.payload,
        });
        return dialogRef.afterClosed();
      }),
      map((dialogResult: any) => {
        if (dialogResult === undefined) {
          return new DialogClose();
        }
        return new DialogSuccess(dialogResult);
      }));
      // catchError((err: any) => of(new OpenDialogFailed(err))));

  constructor(
    private readonly _actions$: Actions,
    private readonly dialog: MatDialog) {}
}
