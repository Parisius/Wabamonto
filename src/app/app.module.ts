import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Geolocation } from '@ionic-native/geolocation';
import { MyApp } from './app.component';
//import { HomePage } from '../pages/home/home';
/*import { TabsPage } from '../pages/tabs/tabs';
import { TrajetPage } from '../pages/trajet/trajet';
import { ReservationPage } from '../pages/reservation/reservation';
import { DiscussionPage } from '../pages/discussion/discussion';
import { NotificationPage } from '../pages/notification/notification';
import { MenuPage } from '../pages/menu/menu';*/


@NgModule({
  declarations: [
    MyApp
    /* TabsPage,
    TrajetPage,
    ReservationPage,
    DiscussionPage,
    NotificationPage,
    MenuPage*/
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp,
    {
      tabsHideOnSubPages: true,
      scrollPadding: true,
      scrollAssist: true,
      autoFocusAssist: true
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
   
     /*TabsPage,
    TrajetPage,
    ReservationPage,
    DiscussionPage,
    NotificationPage,
    MenuPage*/
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
