import { inject, TestBed } from '@angular/core/testing';

import { CoreNavItemsService } from './nav-items.service';

describe('CoreNavItemsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [
        CoreNavItemsService,
      ],
    });
  });

  it('should be created', inject([CoreNavItemsService], (service: CoreNavItemsService) => {
    expect(service).toBeTruthy();
  }));
});
