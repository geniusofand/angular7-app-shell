import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppLayoutRoutingModule, routedComponents } from './app-layout-routing.module';

@NgModule({
  declarations: [
    routedComponents
  ],
  exports: [
    routedComponents,
  ],
  imports: [
    AppLayoutRoutingModule,
    CommonModule,
    RouterModule,
  ]
})
export class AppLayoutModule { }
