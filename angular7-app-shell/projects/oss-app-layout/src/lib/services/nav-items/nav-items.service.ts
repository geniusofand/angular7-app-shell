import { Location } from '@angular/common';
import { Injectable } from '@angular/core';
import {
  AppStateInterface,
  NavItemPrimaryInterface,
  NavItemSecondaryInterface
} from '@geniusofand/oss-app-state';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { OssAppRoute } from '../../constants';
import { NavItemsServiceInterface } from './nav-items-service.interface';

@Injectable()
export class NavItemsService implements NavItemsServiceInterface {

  constructor(private readonly _location: Location,
              private readonly _store: Store<AppStateInterface>) { }

  /**
   * Determine the primary OssAppRoute path that corresponds with the provided full path.
   *
   * @param path Path to compare with known routes
   */
  public determinePrimaryNavAppRoute(path: string): OssAppRoute {
    const normalizedPath: string = this.normalize(path);
    for (const route of Object.getOwnPropertyNames(OssAppRoute)) {
      const routeValue: OssAppRoute = OssAppRoute[route];
      const normalizedRoute: string = this.normalize(routeValue);

      // The OssAppRoute.default value is empty, so will match every time. Skip here and default to home.
      if (normalizedRoute.length > 0 && normalizedPath.startsWith(this.normalize(routeValue))) {
        return routeValue;
      }
    }

    return OssAppRoute.default;
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
  public getPrimaryNavItems(): Observable<NavItemPrimaryInterface[]> {
    return this._store.select(({ ossAppLayout }: AppStateInterface) => ossAppLayout.primaryNavItems);
  }

  /**
   * Retrieve a list of available secondary navigation items visible to the logged-in user.
   */
  public getSecondaryNavItems(): Observable<{ [categoryId: string]: NavItemSecondaryInterface[] }> {
    return this._store.select(({ ossAppLayout }: AppStateInterface) => ossAppLayout.secondaryNavItems);
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

}
