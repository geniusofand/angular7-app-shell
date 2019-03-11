import { Component, OnInit } from '@angular/core';

import { NavItemsService } from '../../services';

@Component({
  selector: 'demo-app-root',
  templateUrl: './app-root.component.html',
  styleUrls: ['./app-root.component.scss']
})
export class AppRootComponent implements OnInit {

  constructor(private navItemsService: NavItemsService) {
    this.navItemsService.loadNavItems();
  }

  ngOnInit() {}

}
