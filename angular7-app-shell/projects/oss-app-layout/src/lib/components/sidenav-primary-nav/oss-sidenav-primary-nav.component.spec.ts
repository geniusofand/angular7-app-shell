import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OssSidenavPrimaryNavComponent } from './oss-sidenav-primary-nav.component';

describe('TopNavComponent', () => {
  let component: OssSidenavPrimaryNavComponent;
  let fixture: ComponentFixture<OssSidenavPrimaryNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OssSidenavPrimaryNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OssSidenavPrimaryNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
