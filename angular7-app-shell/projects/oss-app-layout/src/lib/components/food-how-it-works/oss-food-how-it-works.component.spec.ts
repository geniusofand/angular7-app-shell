import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OssFoodHowItWorksComponent } from './oss-food-how-it-works.component';

describe('OssFoodHowItWorksComponent', () => {
  let component: OssFoodHowItWorksComponent;
  let fixture: ComponentFixture<OssFoodHowItWorksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OssFoodHowItWorksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OssFoodHowItWorksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
