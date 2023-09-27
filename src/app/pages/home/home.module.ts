import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

import { HomePage } from './home.page';
import { HomePageRoutingModule } from './home-routing.module';
import { TaskComponentModule } from '../../components/task/task.module';
import { NewTaskModule } from '../../components/new-task/new-task.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TaskComponentModule,
    HomePageRoutingModule,
    NewTaskModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
