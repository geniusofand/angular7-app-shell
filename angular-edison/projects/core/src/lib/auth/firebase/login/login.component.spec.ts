import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';

import { CoreLoginComponent } from './login.component';
import { AuthFirebaseService } from '../auth-firebase.service';


describe('CoreLoginComponent', () => {
  let component: CoreLoginComponent;
  let fixture: ComponentFixture<CoreLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoreLoginComponent ],
      providers: [
        {
          provide: AuthFirebaseService,
          useValue: MockAuthService
        },
        {
          provide: ActivatedRoute,
          useValue: {
            params: of({})
          }
        },
        {
          provide: Router,
          useValue: { navigate: jasmine.createSpy('navigate') }
        }
      ]
    })
    .compileComponents().then(() => {
      fixture = TestBed.createComponent(CoreLoginComponent);
      component = fixture.componentInstance;
    });
  }));

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});


/**
 * MockAuthService to provide controlled data to testing.
 */
class MockAuthService {

  // TODO: Implement methods to test state scenarios.

}
