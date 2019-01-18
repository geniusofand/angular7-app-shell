import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { InAppMessagingEffects} from './state/in-app-messaging-effects.service';

import { inAppMessagingReducer } from './state/in-app-messaging.reducer';


@NgModule({
  declarations: [],
  imports: [
    // ngrx related Modules need to be first. Order matters.
    StoreModule.forFeature('inAppMessaging', inAppMessagingReducer),
    EffectsModule.forFeature([
      InAppMessagingEffects,
    ]),
    CommonModule
  ]
})
export class InAppMessagingModule { }
