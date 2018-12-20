import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';
import { catchError, exhaustMap, map } from 'rxjs/operators';

import {
  DialogClose,
  DialogOpen,
  DialogSuccess,
  OssAppLayoutActionType,
} from './actions';

@Injectable()
export class OssAppLayoutEffects {

  @Effect()
  public openDialog$: Observable<Action> = this._actions$
    .pipe(
      ofType(OssAppLayoutActionType.DialogOpen),
      exhaustMap((action: DialogOpen) => {
        const dialogRef = this.dialog.open(action.dialogComponentClass, {
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
