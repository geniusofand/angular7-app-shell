import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { StoreRouterConnectingModule, routerReducer } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';

// import { AppRouter } from 'app-router';
import { TraceLogModule } from 'trace-log';

import { AppLayoutRoutingModule, routedComponents } from './app-layout-routing.module';
import { AppRootComponent } from './components/app-root/app-root.component';

@NgModule({
  declarations: [
    routedComponents,
    AppRootComponent
  ],
  exports: [
    routedComponents,
    AppRootComponent
  ],
  imports: [
    StoreModule.forRoot({router: routerReducer}),
    StoreRouterConnectingModule.forRoot({ stateKey: 'router' }),
    AppLayoutRoutingModule,
    BrowserModule,
    CommonModule,
    RouterModule,
    TraceLogModule,
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppRootComponent]
})
export class AppLayoutModule { }
