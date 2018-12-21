import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatDialogModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule, routerReducer } from '@ngrx/router-store';
import { ActionReducerMap, MetaReducer, State, StoreModule } from '@ngrx/store';

import { AppStateInterface  } from 'oss-app-state';
import { OssAppLayoutModule } from 'oss-app-layout';
import { TraceLogModule, traceLogReducer } from 'trace-log';

import { AppLayoutRoutingModule } from './app-layout-routing.module';
import { AppRootComponent } from './components/app-root/app-root.component';
// do to some AOT bugs for imports for EntryComponents we have to import any EntryComponents directly vs. the ./components/index.ts.
// reference: https://github.com/ng-packagr/ng-packagr/issues/734
import { FoodHowItWorksComponent } from './components/food-how-it-works/food-how-it-works.component';
import { AppLayoutEffects } from './state/app-layout-effects.service';

let environment = {
  production: false,
};

const reducers: ActionReducerMap<Partial<AppStateInterface>> = {
  router: routerReducer
};
// export const metaReducers: MetaReducer<AppStateInterface>[] = environment.production ? [] : [traceLogReducer];
export const metaReducers: MetaReducer<any>[] = [traceLogReducer];

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
    // ngrx related Modules need to be first. Order matters.
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot([
      AppLayoutEffects,
    ]), // this is required even though our Effects are defined within other ngModules
    StoreRouterConnectingModule.forRoot({ stateKey: 'router' }),
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule, // Browser, BrowserAnimations and Common must be first. Everything else is in alphabetical order.
    AppLayoutRoutingModule,
    MatButtonModule,
    MatDialogModule,
    OssAppLayoutModule,
    RouterModule,
    TraceLogModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppRootComponent]
})
export class AppLayoutModule { }
