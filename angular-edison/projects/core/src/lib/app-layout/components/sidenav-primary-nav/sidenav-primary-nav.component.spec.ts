import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreSidenavPrimaryNavComponent } from './sidenav-primary-nav.component';

describe('TopNavComponent', () => {
  let component: CoreSidenavPrimaryNavComponent;
  let fixture: ComponentFixture<CoreSidenavPrimaryNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoreSidenavPrimaryNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoreSidenavPrimaryNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
