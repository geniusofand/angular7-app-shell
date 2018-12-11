import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'gofa-oss-top-nav',
  templateUrl: './oss-top-nav.component.html',
  styleUrls: ['./oss-top-nav.component.scss']
})
export class OssTopNavComponent implements OnInit {

  @Output()
  public onSidenavOpenClick: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  sidenavOpenClicked(): void {
    // TODO - determine if we need to track this event in anyway. It is NOT captured by the ngrx-route system.
    console.info('sidenav clicked...');
    this.onSidenavOpenClick.emit();
  }

}
