import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { NavItemsLoad } from 'oss-app-layout';
import { AppStateInterface } from 'oss-core';

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
