import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gofa-oss-app-layout',
  templateUrl: './oss-app-layout.component.html',
  styleUrls: ['./oss-app-layout.component.scss']
})
export class OssAppLayoutComponent implements OnInit {

  // This is our "1 smart parent component" that is aware of State via ngrx. All other
  // components are "dump components" and simply use @Input() and @Output() patterns

  constructor() { }

  ngOnInit() {
  }

}
