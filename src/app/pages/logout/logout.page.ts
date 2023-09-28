import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.page.html',
  styleUrls: ['./logout.page.scss'],
})
export class LogoutPage implements OnInit {

  constructor(public navCtrl: NavController) { }

  ngOnInit() {
  }
cancelar(){
  this.navCtrl.navigateForward("/home");
}
salir(){
  this.navCtrl.navigateForward("/login");
}
}
