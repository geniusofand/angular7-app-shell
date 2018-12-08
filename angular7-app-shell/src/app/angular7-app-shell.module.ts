import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Angular7AppShellRoutingModule } from './angular7-app-shell-routing.module';
import { Angular7AppShellComponent } from './angular7-app-shell.component';

@NgModule({
  declarations: [
    Angular7AppShellComponent
  ],
  imports: [
    BrowserModule,
    Angular7AppShellRoutingModule
  ],
  providers: [],
  bootstrap: [Angular7AppShellComponent]
})
export class Angular7AppShellModule { }
