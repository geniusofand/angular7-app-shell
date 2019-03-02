
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreAppLayoutComponent } from './app-layout.component';

describe('CoreAppLayoutComponent', () => {
  let component: CoreAppLayoutComponent;
  let fixture: ComponentFixture<CoreAppLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoreAppLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoreAppLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
