import { Component } from '@angular/core';
import { App, IonicPage, NavController, NavParams, Refresher, ToastController } from 'ionic-angular';

/**
 * Generated class for the ReservationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-reservation',
  templateUrl: 'reservation.html',
})
export class ReservationPage {

  constructor(public app: App, public navCtrl: NavController, public navParams: NavParams, public toastCtrl : ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReservationPage');
  }

  doRefresh(refresher: Refresher) 
  {
      setTimeout(() => {
        refresher.complete();

        const toast = this.toastCtrl.create({
          message: 'Sessions have been updated.',
          duration: 3000
        });
        toast.present();
      }, 1000);
  }

  goToProposerT()
  {
    this.navCtrl =  this.app.getRootNav();
    this.navCtrl.setRoot('ProposertrPage');
  }
  goToSearchT()
  {
    this.navCtrl = this.app.getRootNav();
    this.navCtrl.setRoot('SearchtPage');
  }

}
