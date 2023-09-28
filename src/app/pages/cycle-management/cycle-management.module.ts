import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CycleManagementPageRoutingModule } from './cycle-management-routing.module';

import { CycleManagementPage } from './cycle-management.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CycleManagementPageRoutingModule
  ],
  declarations: [CycleManagementPage]
})
export class CycleManagementPageModule {}
