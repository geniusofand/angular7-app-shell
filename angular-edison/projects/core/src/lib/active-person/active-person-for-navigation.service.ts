import { Injectable } from '@angular/core';
// import { CalendarService } from '@geniusofand/calendar-service-angular-typescript';
import { DateTimeGofa } from '@geniusofand/date-time-gofa-angular-typescript';
// import {
//   GroceryList, GroceryShoppingDate, GroceryShoppingDateStatus, GroceryShoppingFulfillment,
//   GroceryShoppingService, PantryItem
// } from '@geniusofand/grocery-shopping-service-angular-typescript';
import {
  EngagementExperiment,
  Family, GeniusTip, HomeAndFamilyDomain, PantryCategory, PersonService, PersonWeServe
} from '@geniusofand/angular-edison-person';
import { Observable, ReplaySubject, Subscription } from 'rxjs';

// import { ChatChannelService } from './chat-ux/chat-channel-service';
// import { PersonMealPlanService } from './meal-plan/person-meal-plan-service';


// import { PersonPreferences } from './chat-ux/person-preferences/models/person-preferences.model';
// import { PersonPreferencesService } from './chat-ux/person-preferences/services/person-preferences.service';

@Injectable({
  providedIn: 'root'
})
export class ActivePersonForNavigationService {

  public engagementExperiment: Observable<EngagementExperiment>;
  public engagementExperimentSnapshot: EngagementExperiment;
  public engagementExperimentSubscription: Subscription;
  family: Observable<Family>;
  familySnapshot: Family;
  familySubscription: Subscription;
  person: Observable<PersonWeServe>;
  personReplaySubject: ReplaySubject<PersonWeServe>;
  personSnapshot: PersonWeServe;
  personSubscription: Subscription;
  // personPrefs: Observable<PersonPreferences>;
  // personPrefsSnapshot: PersonPreferences;

  // MyPantry related data
  public miscellaneousPantryCategory: PantryCategory;
  public pantryCategoriesReplaySubject: ReplaySubject<PantryCategory[]>;
  public pantryItemsObservableIndexedByCategoryUuid = {};
  public pantryItemsReplaySubjectIndexedByCategoryUuid = {};

  lockedGeniusOfAndDomains: HomeAndFamilyDomain[] = [];
  unlockedGeniusOfAndDomains: HomeAndFamilyDomain[] = [];

  // public calendarService: CalendarService,
  // public chatChannelService: ChatChannelService,
  // public groceryShoppingService: GroceryShoppingService,
  // public personMealPlanService: PersonMealPlanService,
  constructor(public personService: PersonService) {}

  getGeniusTipsIndexedByOrder(componentName: string): GeniusTip[] {

    const geniusTipsIndexedByOrder: GeniusTip[] = [];
    let personNeedsUpdated = false;
    if (this.personSnapshot.geniusTips && this.personSnapshot.geniusTips.length > 0) {

      this.personSnapshot.geniusTips.forEach((geniusTip: GeniusTip, index, geniusTips) => {

        if (geniusTip.componentName === componentName
          && !this.personSnapshot.geniusTips[index].hasBeenShownMultipleTime) {

          // this is just a runtime param for the UI/View
          geniusTip['indexInList'] = index;
          geniusTipsIndexedByOrder[geniusTip.order] = geniusTip;
        }

        // increment for updating later via PersonService
        if (geniusTip.componentName === componentName) {
          if (!this.personSnapshot.geniusTips[index].hasBeenShownMultipleTime) {
            personNeedsUpdated = true;
            this.personSnapshot.geniusTips[index].hasBeenShownMultipleTime = true;
          }
        }
      });
      if (personNeedsUpdated) {
        this.personService.updatePersonWeServe(this.personSnapshot);
      }
    }

    return geniusTipsIndexedByOrder;
  }

  getPantryCategoriesInAlphabeticalOrder(): PantryCategory[] {

    return this.familySnapshot.pantryCategories.sort((a: PantryCategory, b: PantryCategory) => {
      const x = a.name.toLowerCase();
      const y = b.name.toLowerCase();
      // Miscellaneous should always bubble to the last / end
      if (x === 'miscellaneous') { return 1; }
      if (y === 'miscellaneous') { return -1; }
      if (x < y) {return -1;}
      if (x > y) {return 1;}
      return 0;
    });
  }

  setActivePersonByUuid(personUuid: string) {

    this.setActivePerson(
      this.personService.findOnePersonWeServeByUuid(personUuid)
    );
  }

  setActivePerson(personObservable: Observable<PersonWeServe>) {

    if (this.person) {

      this.unsubscribeActivePerson().then(() => {

        this.setActivePersonReusableLogic(personObservable);
      });

    } else {
      this.setActivePersonReusableLogic(personObservable);
    }
  }

  setActivePersonReusableLogic(personObservable: Observable<PersonWeServe>) {

    this.person = personObservable;
    this.personReplaySubject = new ReplaySubject<PersonWeServe>();

    this.personSubscription = this.person.subscribe(person => {
      this.personSnapshot = person;
      this.personReplaySubject.next(person);

      // this.chatChannelService.subscribeToChannels(this.personSnapshot);

      // if (!this.personMealPlanService.isSubscribedToMealPlan()) {
      //   this.personMealPlanService.subscribeToMealPlanByUuid(this.personSnapshot.uuid, this.personSnapshot.familyUuid);
      // }

      /*
      this.personPrefs = this.personPrefsService.getPersonPreferencesByUuid(this.personSnapshot.uuid);
      this.personPrefs.subscribe(prefs => {
        this.personPrefsSnapshot = prefs;
      });
      */

      this.family = this.personService.findOneFamilyByUuid(this.personSnapshot.familyUuid);

      this.familySubscription = this.family.subscribe(family => {
        this.familySnapshot = family;

        this.pantryCategoriesReplaySubject = new ReplaySubject<PantryCategory[]>();
        this.pantryCategoriesReplaySubject.next(this.familySnapshot.pantryCategories);

        this.familySnapshot.pantryCategories.forEach((category: PantryCategory) => {

          if (category.name.toLowerCase() === 'miscellaneous') {
            this.miscellaneousPantryCategory = category;
          }

          // if (!this.pantryItemsObservableIndexedByCategoryUuid[category.uuid]) {
          //
          //   this.pantryItemsObservableIndexedByCategoryUuid[category.uuid] =
          //     this.groceryShoppingService.findAllPantryItemsByFamilyUuidAndPantryCategoryUuid(
          //       this.personSnapshot.familyUuid, category.uuid
          //     )
          //     .map((pantryItems) => {
          //
          //       // console.info(JSON.stringify(pantryItems));
          //       pantryItems.sort((a: PantryItem, b: PantryItem) => {
          //         if (a.ingredientShoppingPreference.ingredientName.toLowerCase() < b.ingredientShoppingPreference.ingredientName.toLowerCase()) {return -1;}
          //         if (a.ingredientShoppingPreference.ingredientName.toLowerCase() > b.ingredientShoppingPreference.ingredientName.toLowerCase()) {return 1;}
          //         return 0;
          //       });
          //
          //       return pantryItems;
          //     })
          //     .subscribe((pantryItems) => {
          //
          //       if (!this.pantryItemsReplaySubjectIndexedByCategoryUuid[category.uuid]) {
          //         this.pantryItemsReplaySubjectIndexedByCategoryUuid[category.uuid] = new ReplaySubject<PantryItem[]>();
          //       }
          //       // console.info(`adding pantryItems ReplaySubject for category [${category.name}]`);
          //       this.pantryItemsReplaySubjectIndexedByCategoryUuid[category.uuid].next(pantryItems);
          //     });
          //
          // } else {
          //   // console.info(`Do nothing, Observable already exists for the PantryItems for category [${category.name}].`);
          // }
        });

        // ensure we have the family.defaultShoppingDayOfWeek in MyGroceries
        // if (this.familySnapshot.defaultGroceryShoppingDayOfTheWeek) {
        //
        //   // const today = this.personMealPlanService.dates[0];
        //   const today = new Date();
        //   const defaultGroceryShoppingDate = this.calendarService.getDateForUpcomingDayOfWeek(
        //     today, +this.familySnapshot.defaultGroceryShoppingDayOfTheWeek // cast to :number via '+' because FirebaseDb returns as :string
        //   );
        //
        //   this.groceryShoppingService.findGroceryListsWithIsActiveAndIsSmartIntegrationByFamilyUuidAndShoppingDate(family.uuid, defaultGroceryShoppingDate)
        //     .first().toPromise()
        //     .then((groceryLists) => {
        //
        //       if (!groceryLists || groceryLists.length === 0) {
        //
        //         console.info(`no matching GroceryList for [${defaultGroceryShoppingDate.toISOString()}], creating one now...`);
        //         // this.createGroceryList(defaultGroceryShoppingDate);
        //       }
        //     });
        // } else {
        //   // TODO - log error via HTTP so we see that this is not set
        // }

        this.unlockedGeniusOfAndDomains = [];
        this.lockedGeniusOfAndDomains = [];
        this.familySnapshot.homeAndFamilyDomains.forEach(domain => {
          if (domain.status === 1) {
            this.unlockedGeniusOfAndDomains.push(domain);
          } else {
            this.lockedGeniusOfAndDomains.push(domain);
          }
        });
      });

      this.engagementExperiment = this.personService.findOneEngagementExperimentByPersonUuid(this.personSnapshot.uuid);
      this.engagementExperimentSubscription = this.engagementExperiment.subscribe(engagementExperiment => {
        this.engagementExperimentSnapshot = engagementExperiment;
      });
    });
  }

  public unsubscribeActivePerson(): Promise<void> {

    // if (this.chatChannelService.isSubscribedToChannels()) {
    //   this.chatChannelService.unsubscribeFromChannels();
    // }
    // if (this.personMealPlanService.isSubscribedToMealPlan()) {
    //   this.personMealPlanService.unsubscribeFromMeals();
    // }
    if (this.pantryCategoriesReplaySubject) {
      this.pantryCategoriesReplaySubject.unsubscribe();
      this.pantryCategoriesReplaySubject = null;
    }
    if (this.pantryItemsObservableIndexedByCategoryUuid) {
      for (const index of Object.keys(this.pantryItemsObservableIndexedByCategoryUuid)) {
        if (this.pantryItemsObservableIndexedByCategoryUuid[index]) {
          this.pantryItemsObservableIndexedByCategoryUuid[index].unsubscribe();
          this.pantryItemsObservableIndexedByCategoryUuid[index] = null;
        }
      }
    }
    if (this.pantryItemsReplaySubjectIndexedByCategoryUuid) {
      for (const indexChannelUuid of Object.keys(this.pantryItemsReplaySubjectIndexedByCategoryUuid)) {
        if (this.pantryItemsReplaySubjectIndexedByCategoryUuid[indexChannelUuid]) {
          this.pantryItemsReplaySubjectIndexedByCategoryUuid[indexChannelUuid].unsubscribe();
          this.pantryItemsReplaySubjectIndexedByCategoryUuid[indexChannelUuid] = null;
        }
      }
    }
    if (this.personReplaySubject) {
      this.personReplaySubject.unsubscribe();
    }
    if (this.personSubscription) {
      this.personSubscription.unsubscribe();
    }
    if (this.familySubscription) {
      this.familySubscription.unsubscribe();
    }
    if (this.engagementExperimentSubscription) {
      this.engagementExperimentSubscription.unsubscribe();
    }
    // TODO - add logic for .unsubscribe() for MyPantry data

    return Promise.resolve(undefined);
  }

}
