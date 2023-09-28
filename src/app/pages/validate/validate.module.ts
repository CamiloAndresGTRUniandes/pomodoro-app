import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ValidatePageRoutingModule } from './validate-routing.module';

import { ValidatePage } from './validate.page';
import { NgOtpInputModule } from 'ng-otp-input';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ValidatePageRoutingModule,
    NgOtpInputModule
  ],
  declarations: [ValidatePage]
})
export class ValidatePageModule {}
