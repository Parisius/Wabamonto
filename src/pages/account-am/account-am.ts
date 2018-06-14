import { Component } from '@angular/core';
import { App, IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AccountAmPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-account-am',
  templateUrl: 'account-am.html',
})
export class AccountAmPage {

  constructor(public app: App, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AccountAmPage');
  }

  goBack()
  {
    this.app.getRootNav().push('TabsPage');
  }
}
