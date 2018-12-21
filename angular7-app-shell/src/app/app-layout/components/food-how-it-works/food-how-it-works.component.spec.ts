import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodHowItWorksComponent } from './food-how-it-works.component';

describe('FoodHowItWorksComponent', () => {
  let component: FoodHowItWorksComponent;
  let fixture: ComponentFixture<FoodHowItWorksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodHowItWorksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodHowItWorksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
