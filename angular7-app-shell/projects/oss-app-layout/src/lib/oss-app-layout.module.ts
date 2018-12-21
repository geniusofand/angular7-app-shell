import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { MatButtonModule, MatIconModule, MatSidenavModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { OssAppLayoutComponent, OssTopNavComponent } from './components';
import { OssAppLayoutEffects } from './state/oss-app-layout-effects.service';

import { ossAppLayoutReducer } from './state/oss-app-layout.reducer';

@NgModule({
  declarations: [
    OssAppLayoutComponent,
    OssTopNavComponent
  ],
  exports: [
    OssAppLayoutComponent,
    OssTopNavComponent
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
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class OssAppLayoutModule { }
