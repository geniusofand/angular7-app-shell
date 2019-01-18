import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { NavItemSecondaryInterface } from '@geniusofand/oss-app-state';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'gofa-oss-header-secondary-nav',
  templateUrl: './oss-header-secondary-nav.component.html',
  styleUrls: ['./oss-header-secondary-nav.component.scss']
})
export class OssHeaderSecondaryNavComponent implements OnInit {

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
