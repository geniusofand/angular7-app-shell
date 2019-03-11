import { Location } from '@angular/common';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { catchError, exhaustMap, filter, map, startWith, switchMap } from 'rxjs/operators';

import { AppStateInterface } from '../../../app-state.interface';
import { CoreAppRoute } from '../../constants';
import { CoreAppLayoutState, NavItemPrimaryInterface, NavItemSecondaryInterface, UsersNavItem } from '../../models';
import { CoreAppLayoutActions, CoreAppLayoutActionType, NavItemsLoad } from '../../state/actions';
import { NavItemsServiceInterface } from './nav-items-service.interface';

@Injectable({
  providedIn: 'root'
})
export class CoreNavItemsService implements NavItemsServiceInterface {

  protected coreAppLayoutState: CoreAppLayoutState = new CoreAppLayoutState({});
  protected dispatch: BehaviorSubject<CoreAppLayoutState> =
    new BehaviorSubject<CoreAppLayoutState>(this.coreAppLayoutState);

  public primaryNavItems$: Observable<NavItemPrimaryInterface[]> =
    this.dispatch.asObservable().pipe(
      map(state => {
        console.info('state: ', JSON.stringify(state));
        return state.primaryNavItems;
      }),
      startWith([] as NavItemPrimaryInterface[])
    );
  public secondaryNavItems$: Observable<{ [categoryId: string]: NavItemSecondaryInterface[] }> =
    this.dispatch.asObservable().pipe(
      map(state => {
        return state.secondaryNavItems;
      }),
      startWith({} as { [categoryId: string]: NavItemSecondaryInterface[] })
    );

  constructor(private readonly _location: Location) { }

  /**
   * Determine the primary CoreAppRoute path that corresponds with the provided full path.
   *
   * @param path Path to compare with known routes
   */
  public determinePrimaryNavAppRoute(path: string): CoreAppRoute {
    const normalizedPath: string = this.normalize(path);
    for (const route of Object.getOwnPropertyNames(CoreAppRoute)) {
      const routeValue: CoreAppRoute = CoreAppRoute[route];
      const normalizedRoute: string = this.normalize(routeValue);

      // The CoreAppRoute.default value is empty, so will match every time. Skip here and default to home.
      if (normalizedRoute.length > 0 && normalizedPath.startsWith(this.normalize(routeValue))) {
        return routeValue;
      }
    }

    return CoreAppRoute.default;
  }

  /**
   * Get the current browser location path.
   */
  public getPath(): string {
    return this._location.path();
  }

  /**
   * Retrieve a list of available primary navigation items visible to the logged-in user.
   */
  // public getPrimaryNavItems(): Observable<NavItemPrimaryInterface[]> {
  //   return this._store.select(({ ossAppLayout }: AppStateInterface) => ossAppLayout.primaryNavItems);
  // }

  /**
   * Retrieve a list of available secondary navigation items visible to the logged-in user.
   */
  // public getSecondaryNavItems(): Observable<{ [categoryId: string]: NavItemSecondaryInterface[] }> {
  //   return this._store.select(({ ossAppLayout }: AppStateInterface) => ossAppLayout.secondaryNavItems);
  // }

  public loadNavItems(): void {

    // jwt: string;
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

    this.appendPrimaryNavItems(filteredItems);
  }

  /**
   * Adds a / to a path if none exists.
   *
   * @param path Path to normalize
   */
  public normalize(path: string): string {
    const normalized: string = this._location.normalize(path);
    return normalized && normalized.charAt(0) === '/' ? normalized.substr(1) : normalized;
  }

  public appendPrimaryNavItems(primaryNavItems: NavItemPrimaryInterface[]): void {
    const type = CoreAppLayoutActionType.AppendNavItems;
    const action = { payload: primaryNavItems, type };
    const state = reduce(this.coreAppLayoutState, action);

    this.dispatch.next((this.coreAppLayoutState = state));
  }

}

function reduce(state: CoreAppLayoutState, action: CoreAppLayoutActions): CoreAppLayoutState {
  switch (action.type) {

    case CoreAppLayoutActionType.AppendNavItems:
      let currentStatePrimaries: NavItemPrimaryInterface[] = [];
      if (state.primaryNavItems) {
        currentStatePrimaries = state.primaryNavItems;
      }
      const currentStateSecondaries: { [categoryId: string]: NavItemSecondaryInterface[] } = state.secondaryNavItems;

      const primaries: NavItemPrimaryInterface[] = action.payload as NavItemPrimaryInterface[];
      const secondaries: { [categoryId: string]: NavItemSecondaryInterface[] } = {};

      for (const item of primaries) {
        if (currentStateSecondaries) {
          currentStateSecondaries[item.categoryId] = item.menuItems;
        } else {
          secondaries[item.categoryId] = item.menuItems;
        }
      }

      currentStatePrimaries.push(...primaries);
      return {
        ...state,
        primaryNavItems: currentStatePrimaries,
        secondaryNavItems: currentStateSecondaries,
      };

    default:
      return state;
  }
}

