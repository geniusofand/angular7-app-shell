import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// import { OssAppLayoutComponent } from 'oss-app-layout';
import { OssAppLayoutComponent } from "../../../projects/oss-app-layout/src/lib/components";

import { AppRoute } from './constants/app-route.enum';

// each application will override these routes specific to the application
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

export const routedComponents: any[] = [OssAppLayoutComponent];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppLayoutRoutingModule { }
