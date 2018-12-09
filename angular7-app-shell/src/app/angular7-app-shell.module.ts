import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreRouterConnectingModule, routerReducer } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';

// import { AppRouter } from 'app-router';
import { TraceLogModule } from 'trace-log';

import { AppLayoutModule } from './app-layout/app-layout.module';

import { Angular7AppShellRoutingModule } from './angular7-app-shell-routing.module';
import { Angular7AppShellComponent } from './angular7-app-shell.component';


@NgModule({
  declarations: [
    Angular7AppShellComponent
  ],
  imports: [
    StoreModule.forRoot({router: routerReducer}),
    Angular7AppShellRoutingModule,
    StoreRouterConnectingModule.forRoot({ stateKey: 'router' }),
    AppLayoutModule,
    BrowserModule,
    TraceLogModule,
  ],
  providers: [],
  bootstrap: [Angular7AppShellComponent]
})
export class Angular7AppShellModule { }
