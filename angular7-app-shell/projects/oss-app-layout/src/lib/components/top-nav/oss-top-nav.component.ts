import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AppStateInterface } from '@geniusofand/oss-app-state';
import { Store } from '@ngrx/store';

import { DialogOpen } from '../../state/actions';
import { OssFoodHowItWorksComponent } from '..';

@Component({
  selector: 'gofa-oss-top-nav',
  templateUrl: './oss-top-nav.component.html',
  styleUrls: ['./oss-top-nav.component.scss']
})
export class OssTopNavComponent implements OnInit {

  @Input()
  public isLoggedIn: boolean;

  @Output()
  public onSidenavOpenClick: EventEmitter<any> = new EventEmitter();

  constructor(private store: Store<AppStateInterface>) { }

  ngOnInit() {
  }

  openDialogFoodHowItWorks(): void {
    this.store.dispatch(new DialogOpen(OssFoodHowItWorksComponent));
  }

  sidenavOpenClicked(): void {
    // TODO - determine if we need to track this event in anyway. It is NOT captured by the ngrx-route system.
    this.onSidenavOpenClick.emit();
  }

}
