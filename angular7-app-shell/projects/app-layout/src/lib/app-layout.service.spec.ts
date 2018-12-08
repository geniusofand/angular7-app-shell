import { TestBed } from '@angular/core/testing';

import { AppLayoutService } from './app-layout.service';

describe('AppLayoutService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AppLayoutService = TestBed.get(AppLayoutService);
    expect(service).toBeTruthy();
  });
});
