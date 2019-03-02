import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoreAppRoute } from '@geniusofand/angular-edison-core';

import { AppRoute } from './constants';

// each lazy loaded NgModule will define their own specific routes
export const routes: Routes = [
  {
    path: '', children: [

      //////////////////////////////////
      // Global routes
      //////////////////////////////////
      { path: CoreAppRoute.default, redirectTo: CoreAppRoute.user, pathMatch: 'full' },

      //////////////////////////////////
      // User routes
      //////////////////////////////////
      { path: CoreAppRoute.user, loadChildren: '../user/user.module#UserModule' },

      //////////////////////////////////
      // Food routes
      //////////////////////////////////
      { path: AppRoute.food, loadChildren: '../user/user.module#UserModule' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppLayoutRoutingModule { }
