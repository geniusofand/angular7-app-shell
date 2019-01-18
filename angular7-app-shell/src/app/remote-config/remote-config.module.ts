import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatTabsModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { remoteConfigReducer } from './state/remote-config.reducer';
import { RemoteConfigEffects } from './state/remote-config-effects.service';

@NgModule({
  declarations: [],
  exports: [],
  imports: [
    // ngrx related Modules need to be first. Order matters.
    StoreModule.forFeature('remoteConfig', remoteConfigReducer),
    EffectsModule.forFeature([
      RemoteConfigEffects,
    ]),
    CommonModule,
    MatTabsModule,
    RouterModule
  ]
})
export class RemoteConfigModule { }
