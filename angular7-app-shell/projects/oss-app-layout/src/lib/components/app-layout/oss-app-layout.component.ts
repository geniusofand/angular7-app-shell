import { Component, OnDestroy, OnInit } from '@angular/core';
import { AppStateInterface, NavCategoryId, NavItemPrimaryInterface, NavItemSecondaryInterface } from '@geniusofand/oss-app-state';
import { Store } from '@ngrx/store';
import { BehaviorSubject, Subject} from 'rxjs';
import { take, takeUntil } from 'rxjs/operators';

import { NavItemsService } from '../../services/nav-items/nav-items.service';
import { DialogOpen } from '../../state/actions';

@Component({
  selector: 'gofa-oss-app-layout',
  templateUrl: './oss-app-layout.component.html',
  styleUrls: ['./oss-app-layout.component.scss']
})
export class OssAppLayoutComponent implements OnInit, OnDestroy {

  // This is our "1 smart parent component" that is aware of State via ngrx. All other
  // components are "dumb components" and simply use @Input() and @Output() patterns

  public readonly currentCategoryId$: BehaviorSubject<NavCategoryId>;
  // public readonly loggedInUser$: BehaviorSubject<UserInterface>;
  public readonly primaryNavItems$: BehaviorSubject<NavItemPrimaryInterface[]>;
  public readonly secondaryNavItems$: BehaviorSubject<NavItemSecondaryInterface[]>;

  private readonly destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private readonly _navItemsService: NavItemsService,
    private store: Store<AppStateInterface>) {
    this.currentCategoryId$ = new BehaviorSubject<NavCategoryId>(undefined);
    this.primaryNavItems$ = new BehaviorSubject<NavItemPrimaryInterface[]>(undefined);
    this.secondaryNavItems$ = new BehaviorSubject<NavItemSecondaryInterface[]>(undefined);
  }

  public ngOnInit(): void {
    // const cultureCookie: string = this._cookieService.get('Culture');
    // this._translateService.setDefaultLang(cultureCookie);
    // this._translateService.use(cultureCookie)
    //   .pipe(take(1))
    //   .subscribe(() => {
    //     this.languageSet$.next(true);
    //   });

    // Get the logged in user from the token
    // this._authService.getLoggedInUser()
    //   .pipe(
    //     takeUntil(this.destroy$))
    //   .subscribe((user: UserInterface) => {
    //     this.loggedInUser$.next(user);
    //   });

    // Listen for changes to router state and update.
    // this._browserService.selectRouterState()
    //   .pipe(
    //     takeUntil(this.destroy$))
    //   .subscribe((update: RouterStateUrlInterface) => {
    //     const route: string = this._browserService.determinePrimaryNavAppRoute(update.url);
    //     this.updateCurrentCategoryId(this.primaryNavItems$.getValue(), route);
    //
    //     // Update secondary navigation items based on primary navigation
    //     this.updateSecondaryNavItems(this.currentCategoryId$.getValue());
    //   });

    // Listen for changes to primary navigation items to trigger render.
    this._navItemsService.getPrimaryNavItems()
      .pipe(
        takeUntil(this.destroy$))
      .subscribe((primaryNavItems: NavItemPrimaryInterface[]) => {
        const route: string = this._navItemsService.determinePrimaryNavAppRoute(this._navItemsService.getPath());
        this.updateCurrentCategoryId(primaryNavItems, route);
        this.primaryNavItems$.next(primaryNavItems);
      });

    // Initialize secondary navigation items
    this.updateSecondaryNavItems(this.currentCategoryId$.getValue());
  }

  public ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  openDialogHowItWorks(): void {
    // the consuming App's Effects service will parse the .originatedFrom and manage the Dialog + Component accordingly.
    this.store.dispatch(new DialogOpen('OssSidenavPrimaryNavComponent.HowItWorks'));
  }

  /**
   * Helper function to determine what NavCategoryId is currently active for scoping secondary nav items.
   *
   * @param primaryNavItems Primary navigation items
   * @param currentRoute Currently active route
   */
  private updateCurrentCategoryId(primaryNavItems: Readonly<NavItemPrimaryInterface[]>, currentRoute: string): void {
    if (!primaryNavItems) {
      return;
    }
    const navItemMatch: NavItemPrimaryInterface = primaryNavItems.find((item: NavItemPrimaryInterface) => item.route === currentRoute);

    if (!navItemMatch) {
      return;
    }

    const categoryId: NavCategoryId = navItemMatch.categoryId;
    this.currentCategoryId$.next(categoryId);
  }

  private updateSecondaryNavItems(currentCategoryId: NavCategoryId): void {
    this._navItemsService.getSecondaryNavItems()
      .pipe(take(1))
      .subscribe((secondaryNavItems: { [categoryId: string]: NavItemSecondaryInterface[] }) => {
        if (!secondaryNavItems) {
          return;
        }

        const secondaries: NavItemSecondaryInterface[] = secondaryNavItems[currentCategoryId];
        this.secondaryNavItems$.next(secondaries);
      });
  }

}
