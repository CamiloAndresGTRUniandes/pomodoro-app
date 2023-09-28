
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { NewTaskComponent } from './new-task.component';



@NgModule({
  declarations: [NewTaskComponent],
  imports: [
    CommonModule, FormsModule, IonicModule, RouterModule
  ],
  exports: [NewTaskComponent]
})
export class NewTaskModule { }
