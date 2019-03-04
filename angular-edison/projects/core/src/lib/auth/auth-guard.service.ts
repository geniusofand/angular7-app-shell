import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { AuthService } from './auth.service';
import { AuthFirebaseService } from './firebase/auth-firebase.service';

@Injectable({
  providedIn: 'root'
})
export class CoreAuthGuard implements CanActivate {

  // AuthService
  constructor(private authService: AuthFirebaseService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean>|boolean {

    const url: string = state.url;
    if (this.authService.isLoggedIn()) {
      return true;
    } else {
      // it is possible that the AuthService has made a request but is waiting for the async response; so we will
      // setup our own observable here

      // TODO - refactor getAuthUser() to return Observable<AuthUser>
      return this.authService.getAuthUser().pipe(
        switchMap(firebaseUser => {

          if (firebaseUser === null) {
            this.authService.redirectUrl = url;
            this.router.navigateByUrl(`/login?redirectUrl=${url}`);
            return Observable.create((observer) => { observer.next(false); });
          } else {
            return Observable.create((observer) => { observer.next(true); });
          }
        })
      );
    }
  }
}
