import { Component, OnInit } from '@angular/core';
import { NavController, RefresherCustomEvent } from '@ionic/angular';

@Component({
  selector: 'app-cycle-management',
  templateUrl: './cycle-management.page.html',
  styleUrls: ['./cycle-management.page.scss'],
})
export class CycleManagementPage implements OnInit {
  time: string = "25";
  timeOptions = ["20", "25", "30"];
  shortTimeOptions = ["5", "10", "15"];
  shortTime: string = "5";
  longTime: string = "15";
  longTimeOptions = ["15", "20", "25"];
  sessions: string = "4";
  sessionOptions = ["3", "4", "5"];
  constructor(public navCtrl: NavController) { }

  ngOnInit() {
  }

  taskList(){
    this.navCtrl.navigateForward("/home");
  }
  
  refresh(ev: any) {
    setTimeout(() => {
      (ev as RefresherCustomEvent).detail.complete();
    }, 3000);
  }
cancelar(){
  this.navCtrl.navigateForward("/home");
}
aceptar(){
  this.navCtrl.navigateForward("/time-player");
}
}
