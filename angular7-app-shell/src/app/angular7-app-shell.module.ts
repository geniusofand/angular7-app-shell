import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { Angular7AppShellRoutingModule } from './angular7-app-shell-routing.module';
import { Angular7AppShellComponent } from './angular7-app-shell.component';
import { AppLayoutModule } from './app-layout/app-layout.module';

@NgModule({
  declarations: [
    Angular7AppShellComponent
  ],
  imports: [
    Angular7AppShellRoutingModule,
    AppLayoutModule,
    BrowserModule,
  ],
  providers: [],
  bootstrap: [Angular7AppShellComponent]
})
export class Angular7AppShellModule { }
