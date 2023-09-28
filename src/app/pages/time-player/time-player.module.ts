import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TimePlayerPageRoutingModule } from './time-player-routing.module';

import { TimePlayerPage } from './time-player.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TimePlayerPageRoutingModule
  ],
  declarations: [TimePlayerPage]
})
export class TimePlayerPageModule {}
