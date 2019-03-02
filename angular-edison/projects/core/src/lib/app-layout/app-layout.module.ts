import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { MatButtonModule, MatIconModule, MatSidenavModule } from '@angular/material';
import { RouterModule } from '@angular/router';

import {
  CoreAppLayoutComponent,
  CoreHeaderSecondaryNavComponent,
  CoreSidenavPrimaryNavComponent,
} from './components';
import { CoreNavItemsService } from './services';

@NgModule({
  declarations: [
    CoreAppLayoutComponent,
    CoreHeaderSecondaryNavComponent,
    CoreSidenavPrimaryNavComponent,
  ],
  exports: [
    CoreAppLayoutComponent,
    CoreHeaderSecondaryNavComponent,
    CoreSidenavPrimaryNavComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    RouterModule,
  ],
  providers: [
    CoreNavItemsService,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CoreAppLayoutModule { }
