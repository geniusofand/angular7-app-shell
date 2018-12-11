import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { MatButtonModule, MatSidenavModule } from '@angular/material';
import { RouterModule } from '@angular/router';

import { OssAppLayoutComponent, OssTopNavComponent } from './components';

@NgModule({
  declarations: [
    OssAppLayoutComponent,
    OssTopNavComponent
  ],
  exports: [
    OssAppLayoutComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatSidenavModule,
    RouterModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class OssAppLayoutModule { }
