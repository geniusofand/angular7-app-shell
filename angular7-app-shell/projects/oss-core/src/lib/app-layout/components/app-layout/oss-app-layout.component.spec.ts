import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OssAppLayoutComponent } from './oss-app-layout.component';

describe('OssAppLayoutComponent', () => {
  let component: OssAppLayoutComponent;
  let fixture: ComponentFixture<OssAppLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OssAppLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OssAppLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
