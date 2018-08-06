import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule  } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { SigninComponent } from './signin/signin.component';
import { VMessageModule } from '../shared/vmessage/vmessage.module';


@NgModule({
  declarations: [
    SigninComponent
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    VMessageModule,
    RouterModule
  ]
})
export class HomeModule { }
