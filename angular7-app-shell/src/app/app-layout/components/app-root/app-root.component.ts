import { Component, OnInit } from '@angular/core';
import { AppStateInterface } from '@geniusofand/oss-app-state';
import { Store } from '@ngrx/store';

import { NavItemsLoad } from 'oss-app-layout';

@Component({
  selector: 'gofa-app-root',
  templateUrl: './app-root.component.html',
  styleUrls: ['./app-root.component.scss']
})
export class AppRootComponent implements OnInit {

  constructor(private store: Store<AppStateInterface>) {
    this.store.dispatch(new NavItemsLoad());
  }

  ngOnInit() {
  }

}
