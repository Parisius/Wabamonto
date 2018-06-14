import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ForgetPassPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-forget-pass',
  templateUrl: 'forget-pass.html',
})
export class ForgetPassPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ForgetPassPage');
  }

  goToLogin()
  {
    this.navCtrl.setRoot('HomePage');
  }

  goToRegister()
  {
    this.navCtrl.setRoot('SignupPage');
  }
}
