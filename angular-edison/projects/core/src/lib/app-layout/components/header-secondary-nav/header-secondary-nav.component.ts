import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

import { NavItemSecondaryInterface } from '../../models';

@Component({
  selector: 'core-header-secondary-nav',
  templateUrl: './header-secondary-nav.component.html',
  styleUrls: ['./header-secondary-nav.component.scss']
})
export class CoreHeaderSecondaryNavComponent implements OnInit {

  @Input() public isLoggedIn: boolean;
  @Input() public readonly navItems$: BehaviorSubject<NavItemSecondaryInterface[]>;
  @Output() public onSidenavOpenClick: EventEmitter<any> = new EventEmitter();
  @Output() public onOpenDialogHowItWorksClick: EventEmitter<any> = new EventEmitter();

  constructor(public readonly route: Router) { }

  ngOnInit() {
  }

  openDialogHowItWorks(): void {
    // TODO - determine if we need to track this event in anyway. It is NOT captured by the ngrx-route system.
    this.onOpenDialogHowItWorksClick.emit();
  }

  sidenavOpenClicked(): void {
    // TODO - determine if we need to track this event in anyway. It is NOT captured by the ngrx-route system.
    this.onSidenavOpenClick.emit();
  }

}
