import { Component } from '@angular/core';
import { App, IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the InfoChangePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-info-change',
  templateUrl: 'info-change.html',
})
export class InfoChangePage {

  constructor(public app: App,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InfoChangePage');
  }
  
  goBack()
  {
    this.app.getRootNav().push('TabsPage');
  }
}
