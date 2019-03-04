import { OnDestroy } from '@angular/core';
import {
  PersonService, PersonWeServe
} from '@geniusofand/angular-edison-person';

import { Subject, Observable } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { ActivePersonForNavigationService } from '../active-person/active-person-for-navigation.service';
import { AuthUser } from './auth-user';

export abstract class AuthService implements OnDestroy {

  public authUser: AuthUser;
  // public person: Observable<PersonWeServe>;
  // TODO - refactor this back into person: Observable<PersonWeServe> when we move to Firestore
  public personObservable: Observable<PersonWeServe>;
  public personByAuthServiceUuid: Observable<PersonWeServe[]>;
  public personSnapshot: PersonWeServe;
  public redirectUrl: string;

  protected destroy$: Subject<boolean> = new Subject<boolean>();

  public abstract getAuthUser(): Observable<any>;
  public abstract isLoggedIn(): boolean;
  public abstract logout(): Promise<any>;
  public abstract setAuthUser(user: any): Promise<void>;

  constructor(public activePersonForNavigationService: ActivePersonForNavigationService,
              public personService: PersonService) {}

  public onAuthUserStateChange() {

    // assumes that this.setAuthUser() has already been called
    if (this.authUser === null) {
      this.logout();
      return;
    }

    // TODO - refactor this to return Observable<PersonWeServe> when we can. Because of AngularFire2 we can only
    //        get queries to return Observable<PersonWeServe[]>
    if (!this.personByAuthServiceUuid || !this.personSnapshot) {

      // NOTE - I am leaving this commented out and with this note for historical context. I have revisited this concept
      //        multiple timtes already. The reason we DO NOT do .ByFirebaseUserUuid is becaue the first time a PWS
      //        logs in we will not have that stored in our datastore; so it fails.
      // this.personByAuthServiceUuid = this.personService.findPeopleByFirebaseUserUuid(this.authUser.providerUuid);
      if (this.authUser.providerMobilePhoneNumber) {
        this.personByAuthServiceUuid =
          this.personService.findPeopleByMobilePhoneNumber(this.authUser.providerMobilePhoneNumber);
      } else {
        // NOTE - in this scenario, we know this is an @geniusofand.com employee and we know that .firebaseUserUuis will be set in our datastore
        this.personByAuthServiceUuid =
          this.personService.findPeopleByFirebaseUserUuid(this.authUser.authServiceUuid);
      }
      this.personByAuthServiceUuid.pipe(takeUntil(this.destroy$))
          .subscribe(people => this.handlePeopleResponse(people));
    } else {
      // it is still the same person logged in and we already have a Person subscription, so no need to do anything
    }
  }

  ngOnDestroy() {
    this.destroy$.next(true);
  }

  private handlePeopleResponse(people: PersonWeServe[]): void {

    // Handle error conditions first.
    if (people && people.length > 1) {
      throw(new Error(`ERROR - received multiple results for [${this.authUser.authServiceName}], [${this.authUser.authServiceUuid}] and [${this.authUser.providerUuid}]`));
    } else if (!people || people.length === 0) {
      throw(new Error('ERROR - no match for authenticated person.'));
    }

    this.personSnapshot = people[0];

    // if this is a PWS logging in, then go ahead and set the activePersonForNav as the same as the Authenticated PWS
    if (this.authUser.providerMobilePhoneNumber) {
      // NOTE - we need the Observable to pass to ActivePersonForNavigationService
      this.personObservable = this.personService.findOnePersonWeServeByUuid(this.personSnapshot.uuid);
      // console.info('setting ActivePerson from AuthService...');
      this.activePersonForNavigationService.setActivePerson(this.personObservable);

    // if this is a Genius logging in and they have an stored .navigatingAsPersonUuid, then go ahead and set the activePersonForNav as the same as the .navigatingAsPersonUuid
    } else if (!this.authUser.providerMobilePhoneNumber && this.personSnapshot.navigatingAsPersonUuid) {

      // console.info(`setting ActivePerson from AuthService via .navigatingAsPersonUuid [${this.personSnapshot.navigatingAsPersonUuid}]...`);
      this.activePersonForNavigationService.setActivePersonByUuid(this.personSnapshot.navigatingAsPersonUuid);
    }
  }

}
