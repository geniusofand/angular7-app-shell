import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';
import { catchError, exhaustMap, filter, map } from 'rxjs/operators';

@Injectable()
export class OssAppLayoutEffects {

  constructor(private readonly _actions$: Actions) {}

}
