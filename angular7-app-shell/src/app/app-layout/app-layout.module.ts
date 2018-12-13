import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { StoreRouterConnectingModule, routerReducer } from '@ngrx/router-store';
import { ActionReducerMap, MetaReducer, State, StoreModule } from '@ngrx/store';

import { AppStateInterface  } from 'oss-app-state';
import { OssAppLayoutModule } from 'oss-app-layout';
import { TraceLogModule, traceLogReducer } from 'trace-log';

import { AppLayoutRoutingModule } from './app-layout-routing.module';
import { AppRootComponent } from './components/app-root/app-root.component';

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
    AppRootComponent
  ],
  exports: [
    AppRootComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule, // Browser, BrowserAnimations and Common must be first. Everything else is in alphabetical order.
    AppLayoutRoutingModule,
    MatButtonModule,
    OssAppLayoutModule,
    RouterModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    StoreRouterConnectingModule.forRoot({ stateKey: 'router' }),
    TraceLogModule,
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppRootComponent]
})
export class AppLayoutModule { }
