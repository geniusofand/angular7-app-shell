import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { CoreAppRoute } from '../../../app-layout/constants';
import { AuthFirebaseService } from '../auth-firebase.service';
import { CoreLoginComponent } from '../login/login.component';

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
//declare global {
//  const firebaseui;
//}

@Component({
  selector: 'core-login',
  templateUrl: '../login/login.component.html',
  styleUrls: [
    '../../../../../../../node_modules/firebaseui/dist/firebaseui.css',
    '../login/login.component.scss'
  ]
})
export class CoreLoginAdminComponent extends CoreLoginComponent {

  constructor(public activatedRoute: ActivatedRoute, public authService: AuthFirebaseService,
              public router: Router) {
    super(activatedRoute, authService, router);

    this.defaultRedirectOnLogin = '/' + CoreAppRoute.selectPerson;
    this.firebaseUiConfig = {
      signInSuccessUrl: CoreAppRoute.adminAuthSuccessCallback,
      signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID
      ],
      // Terms of service url.
      tosUrl: '<your-tos-url>'
    };
  }

  loginResultCallback() {

      if (this.authService.isLoggedIn()) {
        this.redirect();
      } else {
        this.router.navigate(['/' + CoreAppRoute.adminLogin]);
      }
  }

}
