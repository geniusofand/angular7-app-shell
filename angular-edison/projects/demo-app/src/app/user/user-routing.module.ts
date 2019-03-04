import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoreAuthGuard, CoreAppRoute } from '@geniusofand/angular-edison-core';

import { MyAccountComponent } from './my-account/my-account.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';

const routes: Routes = [
  { path: '', component: UserDashboardComponent, canActivate: [CoreAuthGuard] },
  { path: CoreAppRoute.userPreferences, component: MyAccountComponent, canActivate: [CoreAuthGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
