import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppRoute } from './constants/app-route.enum';

// each lazy loaded NgModule will define their own specific routes
export const routes: Routes = [
  {
    path: '', children: [

      //////////////////////////////////
      // Global routes
      //////////////////////////////////
      { path: AppRoute.home, redirectTo: AppRoute.user, pathMatch: 'full' },

      //////////////////////////////////
      // Dashboard routes
      //////////////////////////////////
      // outlet: 'grid-layout-main-body'
      { path: AppRoute.user, loadChildren: '../user/user.module#UserModule' },

      //////////////////////////////////
      // Users routes
      //////////////////////////////////
      // { path: AppRoute.users, loadChildren: 'app-users#UsersModule' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppLayoutRoutingModule { }
