import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { MatButtonModule, MatIconModule, MatSidenavModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import {
  OssAppLayoutComponent,
  OssHeaderSecondaryNavComponent,
  OssSidenavPrimaryNavComponent,
} from './app-layout/components';
import { OssAppLayoutEffects } from './app-layout/state/oss-app-layout-effects.service';
import { ossAppLayoutReducer } from './app-layout/state/oss-app-layout.reducer';
import { NavItemsService } from './app-layout/services/nav-items/nav-items.service';

@NgModule({
  declarations: [
    OssAppLayoutComponent,
    OssHeaderSecondaryNavComponent,
    OssSidenavPrimaryNavComponent,
  ],
  exports: [
    OssAppLayoutComponent,
    OssHeaderSecondaryNavComponent,
    OssSidenavPrimaryNavComponent,
  ],
  imports: [
    StoreModule.forFeature('ossAppLayout', ossAppLayoutReducer),
    EffectsModule.forFeature([
      OssAppLayoutEffects,
    ]),
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    RouterModule,
  ],
  providers: [
    OssAppLayoutEffects,
    NavItemsService,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class OssCoreModule { }
