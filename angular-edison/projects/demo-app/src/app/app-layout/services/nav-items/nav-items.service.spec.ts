import { inject, TestBed } from '@angular/core/testing';

import { NavItemsService } from './nav-items.service';

describe('CoreNavItemsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [
        NavItemsService,
      ],
    });
  });

  it('should be created', inject([NavItemsService], (service: NavItemsService) => {
    expect(service).toBeTruthy();
  }));
});
