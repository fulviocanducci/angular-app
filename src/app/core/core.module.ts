import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './header/header.component';


@NgModule({
  exports: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    HeaderComponent
  ]
})
export class CoreModule {

}
