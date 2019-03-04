import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { PersonService } from '@geniusofand/angular-edison-person';
import * as firebase from 'firebase';
import { Observable, Subscription } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { ActivePersonForNavigationService } from '../../active-person/active-person-for-navigation.service';
import { AuthService } from '../auth.service';
import { AuthUser } from '../auth-user';

@Injectable({
  providedIn: 'root'
})
export class AuthFirebaseService extends AuthService {

  firebaseUser: firebase.User;
  firebaseUserSubscription: Subscription;

  constructor(public activePersonForNavigationService: ActivePersonForNavigationService,
              public angularFireAuth: AngularFireAuth, public personService: PersonService) {
    super(activePersonForNavigationService, personService);
    this.onInit();
  }

  onInit() {
    this.firebaseUserSubscription = this.angularFireAuth.authState.pipe(takeUntil(this.destroy$))
        .subscribe(firebaseUser => {
          this.firebaseUser = firebaseUser;
          this.setAuthUser(firebaseUser).then(() => {
            this.onAuthUserStateChange();
          });
        });
  }

  // TODO - refactor to return Observable<AuthUser>
  getAuthUser(): Observable<firebase.User> {
    return this.angularFireAuth.authState;
  }

  isLoggedIn(): boolean {
    if (this.firebaseUser) {
      return true;
    } else {
      return false;
    }
  }

  logout(): Promise<any> {
    this.firebaseUserSubscription.unsubscribe();
    this.firebaseUser = null;
    return this.angularFireAuth.auth.signOut();
  }

  public setAuthUser(firebaseUser: firebase.User): Promise<void> {

    if (firebaseUser === null) {
      this.authUser = null;
    } else {
      this.authUser = new AuthUser();
      this.authUser.authServiceUuid = firebaseUser.uid;
      // why is firebaseUser.providerData an array?
      this.authUser.providerUuid = firebaseUser.providerData[0].uid;
      this.authUser.providerName = firebaseUser.providerData[0].providerId;
      if (firebaseUser.providerData[0].email) {
        this.authUser.providerEmail = firebaseUser.providerData[0].email;
      }
      if (firebaseUser.providerData[0].phoneNumber) {
        this.authUser.providerMobilePhoneNumber = firebaseUser.providerData[0].phoneNumber;
      }
    }

    return Promise.resolve(null);
  }
}
