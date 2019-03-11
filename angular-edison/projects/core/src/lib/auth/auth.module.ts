import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { RouterModule } from '@angular/router';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { authRoutes } from './auth-routing.module';
import { AuthFirebaseService } from './firebase/auth-firebase.service';
import { CoreLoginComponent } from './firebase/login/login.component';
import { CoreLoginAdminComponent } from './firebase/login-admin/login-admin.component';
// import { ReferralAutoLoginComponent } from './referral-auto-login/login/referral-auto-login.component';

import { environment } from '../../../../demo-app/src/environments/environment';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    RouterModule.forRoot(authRoutes),
    MatProgressSpinnerModule
  ],
  declarations: [
    CoreLoginComponent,
    CoreLoginAdminComponent,
    // ReferralAutoLoginComponent
  ],
  exports: [
    CoreLoginComponent,
    CoreLoginAdminComponent,
    // ReferralAutoLoginComponent
  ],
  // this is needed because firebase/login/login.component.ts explicitly
  // declare AuthFirebaseService rather than the more generic AuthService
  // providers: [ AuthFirebaseService ]
})
export class CoreAuthModule { }
