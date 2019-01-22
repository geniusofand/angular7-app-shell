import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OssHeaderSecondaryNavComponent } from './oss-header-secondary-nav.component';

describe('TopNavComponent', () => {
  let component: OssHeaderSecondaryNavComponent;
  let fixture: ComponentFixture<OssHeaderSecondaryNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OssHeaderSecondaryNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OssHeaderSecondaryNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
