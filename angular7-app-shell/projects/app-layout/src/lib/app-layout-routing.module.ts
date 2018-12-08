import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppLayoutComponent } from './components/app-layout/app-layout.component';
import { AppRoute } from './constants/app-route.enum';

// each application will override these routes specific to the application
export const routes: Routes = [
  {
    path: AppRoute.home, component: AppLayoutComponent, pathMatch: 'full'
  },
];

export const routedComponents: any[] = [AppLayoutComponent];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppLayoutRoutingModule { }
