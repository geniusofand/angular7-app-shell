import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OssAppRoute } from 'oss-app-layout';

import { AppRoute } from './constants/app-route.enum';

// each lazy loaded NgModule will define their own specific routes
export const routes: Routes = [
  {
    path: '', children: [

      //////////////////////////////////
      // Global routes
      //////////////////////////////////
      { path: OssAppRoute.default, redirectTo: OssAppRoute.user, pathMatch: 'full' },

      //////////////////////////////////
      // User routes
      //////////////////////////////////
      { path: OssAppRoute.user, loadChildren: '../user/user.module#UserModule' },

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
