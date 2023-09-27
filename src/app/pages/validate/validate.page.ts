import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-validate',
  templateUrl: './validate.page.html',
  styleUrls: ['./validate.page.scss'],
})
export class ValidatePage implements OnInit {
  textDescription: string = 'Ingresa el código de verificación que te enviamos al número proporcionado';
  otpNumber: any;

  ngOnInit() {
    this.otpNumber = '';
  }
  constructor(public navCtrl: NavController) { }
  onOtpChange(e : Event){
    this.otpNumber = e;
  }
  validate(){
    if(this.otpNumber.length === 6){
      console.log('validate');
      console.log(this.otpNumber);
      this.navCtrl.navigateForward("/home");
    }
  }
  
}
