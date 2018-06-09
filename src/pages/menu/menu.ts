import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Nav } from 'ionic-angular';

export interface PageInterface
{
  title: string;
  pageName: string;
  tabComponent?:any;
  index?:any;
  icon: string;
}

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {

  rootPage = 'TabsPage';

  @ViewChild(Nav) nav: Nav;

  pages: PageInterface[]=
  [
    {title: 'Quoi de Neuf', pageName: 'TrajetPage', tabComponent: 'TrajetPage', index: 0 , icon:''},
    {title: 'Mon Profil', pageName: 'TrajetPage',   icon:''},
    {title: 'Paramètres', pageName: 'TrajetPage',  icon:''},
    {title: 'A propos', pageName: 'TrajetPage',   icon:''}

  ]

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
  }

  openPage(page: PageInterface)
  {

  }

  isActive(page: PageInterface)
  {

  }


}
