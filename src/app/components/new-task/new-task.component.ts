import { ChangeDetectionStrategy, Component, inject, Input, ViewChild } from '@angular/core';
import { Platform } from '@ionic/angular';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.scss'],
  
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewTaskComponent {
  private platform = inject(Platform);
  private data = inject(DataService);
  newTask : string = '';

  addTask() {
    if (this.newTask !== '') {
      this.data.addTask(this.newTask);
      this.newTask = '';
    }
  
  }
}
