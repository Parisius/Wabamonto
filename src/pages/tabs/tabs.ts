import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
/* import { TrajetPage } from '../trajet/trajet';
import { ReservationPage } from '../reservation/reservation';
import { DiscussionPage } from '../discussion/discussion';
import { NotificationPage } from '../notification/notification';
 */
@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  tab1Root = 'TrajetPage';
  tab2Root = 'ReservationPage';
  tab3Root = 'DiscussionPage';
  tab4Root = 'NotificationPage';

  /* tab5Root = 'InformationsPage';
  tab6Root = 'InfoChangePage';
  tab7Root = 'CarAddPage';
  tab8Root = 'AccountAmPage'; */

  myIndex: number = 0;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
   this.myIndex = navParams.data.tabIndex || 0;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

}
