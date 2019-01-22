import { inject, TestBed } from '@angular/core/testing';
import { Store, StoreModule } from '@ngrx/store';

import { NavItemsService } from './nav-items.service';

describe('NavItemsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({}),
      ],
      providers: [
        NavItemsService,
        Store,
      ],
    });
  });

  it('should be created', inject([NavItemsService], (service: NavItemsService) => {
    expect(service).toBeTruthy();
  }));
});
