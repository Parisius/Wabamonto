import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, Refresher } from 'ionic-angular';

/**
 * Generated class for the DiscussionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-discussion',
  templateUrl: 'discussion.html',
})
export class DiscussionPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl : ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DiscussionPage');
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
}
