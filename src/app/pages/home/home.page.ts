import { Component, inject } from '@angular/core';
import { NavController, RefresherCustomEvent } from '@ionic/angular';

import { DataService, Task } from '../../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  private data = inject(DataService);
  
  constructor(public navCtrl: NavController) {}

  refresh(ev: any) {
    setTimeout(() => {
      (ev as RefresherCustomEvent).detail.complete();
    }, 3000);
  }

  getTasks(): Task[] {
    return this.data.getTasks();
  }
  logout()
  {
    this.navCtrl.navigateForward("/logout");
  }
}
