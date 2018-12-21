import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OssTopNavComponent } from './oss-top-nav.component';

describe('TopNavComponent', () => {
  let component: OssTopNavComponent;
  let fixture: ComponentFixture<OssTopNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OssTopNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OssTopNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
