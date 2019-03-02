import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreHeaderSecondaryNavComponent } from './header-secondary-nav.component';

describe('TopNavComponent', () => {
  let component: CoreHeaderSecondaryNavComponent;
  let fixture: ComponentFixture<CoreHeaderSecondaryNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoreHeaderSecondaryNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoreHeaderSecondaryNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
