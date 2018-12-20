import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { MatButtonModule, MatDialogModule, MatIconModule, MatSidenavModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { OssAppLayoutComponent, OssTopNavComponent } from './components';
// do to some AOT bugs for imports for EntryComponents we have to import any EntryComponents directly vs. the ./components/index.ts.
// reference: https://github.com/ng-packagr/ng-packagr/issues/734
import { OssFoodHowItWorksComponent } from './components/food-how-it-works/oss-food-how-it-works.component';
import { OssAppLayoutEffects } from './state/oss-app-layout-effects.service';

import { ossAppLayoutReducer } from './state/oss-app-layout.reducer';

@NgModule({
  declarations: [
    OssAppLayoutComponent,
    OssFoodHowItWorksComponent,
    OssTopNavComponent
  ],
  entryComponents: [
    OssFoodHowItWorksComponent,
  ],
  exports: [
    OssAppLayoutComponent,
    OssFoodHowItWorksComponent,
    OssTopNavComponent
  ],
  imports: [
    StoreModule.forFeature('ossAppLayout', ossAppLayoutReducer),
    EffectsModule.forFeature([
      OssAppLayoutEffects,
    ]),
    CommonModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    MatSidenavModule,
    RouterModule,
  ],
  providers: [
    OssAppLayoutEffects,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class OssAppLayoutModule { }
