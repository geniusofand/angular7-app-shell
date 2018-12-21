import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';
import { catchError, exhaustMap, filter, map } from 'rxjs/operators';

import {
  DialogClose,
  DialogOpen,
  DialogSuccess,
  OssAppLayoutActionType,
} from 'oss-app-layout';

import { FoodHowItWorksComponent } from '../components/food-how-it-works/food-how-it-works.component';

@Injectable()
export class AppLayoutEffects {

  @Effect()
  public openDialog$: Observable<Action> = this._actions$
    .pipe(
      ofType(OssAppLayoutActionType.DialogOpen),
      filter((action: DialogOpen) => action.originatedFrom != null),
      exhaustMap((action: DialogOpen) => {
        let componentClass: any;
        switch (action.originatedFrom) {
          case 'OssTopNavComponent.HowItWorks':
            componentClass = FoodHowItWorksComponent;
            break;
        }
        const dialogRef = this.dialog.open(componentClass, {
          data: action.payload,
        });
        return dialogRef.afterClosed();
      }),
      map((dialogResult: any) => {
        if (dialogResult === undefined) {
          return new DialogClose();
        }
        return new DialogSuccess(dialogResult);
      }));
      // catchError((err: any) => of(new OpenDialogFailed(err))));

  constructor(
    private readonly _actions$: Actions,
    private readonly dialog: MatDialog) {}
}
