import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the SearchtPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-searcht',
  templateUrl: 'searcht.html',
})
export class SearchtPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchtPage');
  }

  
  
  goBack()
  {
    this.navCtrl.setRoot('MenuPage');
  }

  searchTrajet()
  {
    this.alertCtrl.create({

      title: 'Search',
      message: 'Recherche en cours',
      buttons: [
        {
          text: 'OK',
          handler: () =>
          {
            this.goBack();
          }

        }
      ]

    }).present();
  }
}
