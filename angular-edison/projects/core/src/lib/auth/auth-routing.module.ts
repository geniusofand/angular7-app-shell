import { Routes } from '@angular/router';

import { CoreLoginComponent } from './firebase/login/login.component';
import { CoreLoginAdminComponent } from './firebase/login-admin/login-admin.component';

export const authRoutes: Routes = [
  { path: 'login/auth-callback', component: CoreLoginComponent },
  { path: 'login-admin/auth-callback', component: CoreLoginAdminComponent },
  { path: 'login', component: CoreLoginComponent },
  { path: 'login-admin', component: CoreLoginAdminComponent },
  { path: 'logout', component: CoreLoginComponent }
];
