import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { NavItemPrimaryInterface } from '@geniusofand/oss-app-state';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'gofa-oss-sidenav-primary-nav',
  templateUrl: './oss-sidenav-primary-nav.component.html',
  styleUrls: ['./oss-sidenav-primary-nav.component.scss']
})
export class OssSidenavPrimaryNavComponent implements OnInit {

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
