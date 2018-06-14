import { Component } from '@angular/core';
import { App,IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CarAddPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-car-add',
  templateUrl: 'car-add.html',
})
export class CarAddPage {

  constructor(public app: App, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CarAddPage');
  }

  goBack()
  {
    this.app.getRootNav().push('TabsPage');
  }
}
