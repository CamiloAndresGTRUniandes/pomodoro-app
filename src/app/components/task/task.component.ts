import { ChangeDetectionStrategy, Component, inject, Input, ViewChild } from '@angular/core';
import { NavController, Platform } from '@ionic/angular';
import { DataService, Task } from '../../services/data.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskComponent {
  private platform = inject(Platform);
  private data = inject(DataService);
  @ViewChild('popover') popover : any;

  isOpen = false;
constructor(public navCtrl: NavController) { }

  @Input() task?: Task;
  isIos() {
    return this.platform.is('ios')
  }
  ellipsisMenu(e: Event) {
    this.popover.event = e;
    this.isOpen = true;
  }

  markCompleted(id : number) {
    this.data.markCompleted(id);
    console.log('markCompleted', this.data.getTaskById(id));
  } 
player(){
  this.navCtrl.navigateForward("/cycle-management");
}
eliminar(id : number) {
  this.isOpen = false;
  this.popover.dismiss();
  this.data.deleteTask(id);
  
}
markAsCompleted(id : number) {  
  this.data.markCompleted(id);
  console.log('markCompleted', this.data.getTaskById(id));
  this.isOpen = false;
  this.popover.dismiss();
}
}
