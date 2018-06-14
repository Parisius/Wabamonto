import { Component, ViewChild } from '@angular/core';
import { App, IonicPage, NavController, NavParams,Nav } from 'ionic-angular';

/**
 * Generated class for the InformationsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-informations',
  templateUrl: 'informations.html',
})
export class InformationsPage {

  
  @ViewChild(Nav) nav: Nav;
  constructor(public app: App, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() 
  {
    console.log('ionViewDidLoad InformationsPage');
  }

  
  goBack()
  {
    this.app.getRootNav().push('TabsPage');
  }
}
