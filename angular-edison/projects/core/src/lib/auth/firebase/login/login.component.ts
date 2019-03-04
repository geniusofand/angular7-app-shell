import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { CoreAppRoute } from '../../../app-layout/constants';
import { AuthFirebaseService } from '../auth-firebase.service';

// This is all to enable the use of FirebaseUI drop in code which is the recommended approach from Firebase
// because of 1) best practices adhearance 2) security updates/adhearance.
// Reference - https://stackoverflow.com/questions/41625806/use-firebaseui-with-angularfire2
import * as firebase from 'firebase/app';
// Attach firebase to window so FirebaseUI can access it
(<any>window).firebase = firebase;
// Import FirebaseUI standalone (as its npm.js file causes double firebase code)
import 'firebaseui/dist/firebaseui';
// Imports for side effects only
// Declare `window.firebaseui` that the above import creates
declare global {
  const firebaseui;
}

@Component({
  selector: 'core-login',
  templateUrl: './login.component.html',
  styleUrls: [
    '../../../../../../../node_modules/firebaseui/dist/firebaseui.css',
    './login.component.scss'
  ]
})
export class CoreLoginComponent implements OnInit {

  defaultRedirectOnLogin = '/' + CoreAppRoute.user;
  firebaseUiAuth: any;
  firebaseUiConfig: any;
  millisecondsToWait = 2500;

  constructor(public activatedRoute: ActivatedRoute, public authService: AuthFirebaseService,
              public router: Router) {

    this.firebaseUiConfig = {
      signInSuccessUrl: CoreAppRoute.authSuccessCallback,
      signInOptions: [
        {
          provider: firebase.auth.PhoneAuthProvider.PROVIDER_ID,
          recaptchaParameters: {
            // Reference: https://firebase.google.com/docs/auth/web/phone-auth and https://www.google.com/recaptcha/intro/invisible.html
            size: 'invisible'
          }
        }
      ],
      // Terms of service url.
      tosUrl: '<your-tos-url>'
    };
  }

  ngOnInit() {

    // note - this is a total hack until I can figure out the Lifecycle issue that is causing runtimeConfig to be Null.
    // TODO - once this is removed go back and make their properties and methods PRIVATE again
    // await this.authService.runtimeConfigService.setRuntimeConfig();

    if (this.activatedRoute.snapshot.queryParams['redirectUrl']) {
      this.authService.redirectUrl = this.activatedRoute.snapshot.queryParams['redirectUrl'];
      this.firebaseUiConfig.signInSuccessUrl = this.firebaseUiConfig.signInSuccessUrl + '?redirectUrl=' + this.authService.redirectUrl;
    }

    const url = this.activatedRoute.snapshot.url.toString();
    if (url === CoreAppRoute.logout) {
      this.authService.logout()
        .then(() => this.router.navigate(['/']));
    } else if (url === 'login,auth-callback') {
      this.loginResultCallback();
    } else if (this.authService.isLoggedIn()) {
      // if YES, then no need to wait()...see notes below
      this.redirect();
    } else {

      // Wait. We do this in order to allow AuthService.ngOnInit() ample time to get a response back.
      // Without this the this.authService.isLoggedIn() will often return FALSE because it is being called before
      // the initial AuthUser.subscribe() response within AuthService.ngOnInit().
      window.setTimeout(() => {

        // check isLoggedIn() again to see if we have a different answer now that AuthUser.subscribe() has responded
        if (this.authService.isLoggedIn()) {
          this.redirect();
        } else {
          // render the UI template by showing the Firebase UI auth widget
          if (!this.firebaseUiAuth) {
            this.firebaseUiAuth = new firebaseui.auth.AuthUI(this.authService.angularFireAuth.auth);
          }
          this.firebaseUiAuth.start('core-login', this.firebaseUiConfig);
        }

      }, this.millisecondsToWait);

    }
  }

  loginResultCallback() {

      if (this.authService.isLoggedIn()) {
        this.redirect();
      } else {
        this.router.navigate(['/' + CoreAppRoute.login]);
      }
  }

  redirect() {

    if (this.authService.redirectUrl) {
      this.router.navigate([this.authService.redirectUrl]);
    } else {
      this.router.navigate([this.defaultRedirectOnLogin]);
    }
  }

}
