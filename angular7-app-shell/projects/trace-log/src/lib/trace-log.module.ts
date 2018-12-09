import { NgModule } from '@angular/core';
import { MetaReducer, StoreModule } from '@ngrx/store';

import { AppStateInterface, traceLogReducer } from './state/trace-log.reducer';

let environment = {
  production: false,
};

export const metaReducers: MetaReducer<AppStateInterface>[] = environment.production ? [] : [traceLogReducer];

@NgModule({
  imports: [
    StoreModule.forRoot(null, { metaReducers }),
  ],
})
export class TraceLogModule { }
