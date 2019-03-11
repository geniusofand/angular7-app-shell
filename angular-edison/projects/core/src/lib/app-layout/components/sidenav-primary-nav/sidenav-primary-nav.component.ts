import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

import { NavItemPrimaryInterface } from '../../models/index';

@Component({
  selector: 'core-sidenav-primary-nav',
  templateUrl: './sidenav-primary-nav.component.html',
  styleUrls: ['./sidenav-primary-nav.component.scss']
})
export class CoreSidenavPrimaryNavComponent implements OnInit {

  @Input() public readonly navItems$: BehaviorSubject<NavItemPrimaryInterface[]>;

  @Output() public onSidenavPrimaryNavItemClick: EventEmitter<any> = new EventEmitter();

  constructor(public readonly route: Router) { }

  ngOnInit() {
  }

  sidenavPrimaryNavItemClicked(): void {
    // TODO - determine if we need to track this event in anyway. It is NOT captured by the ngrx-route system.
    this.onSidenavPrimaryNavItemClick.emit();
  }

}
