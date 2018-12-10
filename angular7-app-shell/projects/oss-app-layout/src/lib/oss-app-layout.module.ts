import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { OssAppLayoutComponent, OssFooterComponent } from './components';

const routedComponents: any[] = [
  OssAppLayoutComponent,
  OssFooterComponent
];

@NgModule({
  declarations: [
    OssAppLayoutComponent,
    OssFooterComponent
  ],
  exports: [
    OssAppLayoutComponent,
    OssFooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class OssAppLayoutModule { }
