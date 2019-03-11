import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatDialogModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { AngularFireModule } from '@angular/fire';
import { AppStateInterface, CoreAppLayoutModule, CoreAuthModule } from '@geniusofand/angular-edison-core';
import { PersonModule } from '@geniusofand/angular-edison-person';

import { environment } from '../../environments/environment';

import { AppLayoutRoutingModule } from './app-layout-routing.module';
import { AppRootComponent } from './components/app-root/app-root.component';
// do to some AOT bugs for imports for EntryComponents we have to import any EntryComponents directly vs. the ./components/index.ts.
// reference: https://github.com/ng-packagr/ng-packagr/issues/734
import { FoodHowItWorksComponent } from './components/food-how-it-works/food-how-it-works.component';
import { NavItemsService } from './services';

@NgModule({
  declarations: [
    AppRootComponent,
    FoodHowItWorksComponent,
  ],
  entryComponents: [
    FoodHowItWorksComponent,
  ],
  exports: [
    AppRootComponent,
    FoodHowItWorksComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule, // Browser, BrowserAnimations and Common must be first. Everything else is in alphabetical order.
    // AngularFireModule.initializeApp(environment.firebaseConfig),
    AppLayoutRoutingModule,
    MatButtonModule,
    MatDialogModule,
    CoreAppLayoutModule,
    CoreAuthModule,
    PersonModule,
    RouterModule,
  ],
  providers: [
    NavItemsService,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppRootComponent]
})
export class AppLayoutModule { }
