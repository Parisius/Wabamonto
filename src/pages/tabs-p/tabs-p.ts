import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TabsPPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabs-p',
  templateUrl: 'tabs-p.html',
})
export class TabsPPage {

  tab5Root = 'InformationsPage';
  tab6Root = 'InfoChangePage';
  tab7Root = 'CarAddPage';
  tab8Root = 'AccountAmPage';
  myNIndex: number;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.myNIndex = navParams.data.tabIndex || 0;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPPage');
  }

}
