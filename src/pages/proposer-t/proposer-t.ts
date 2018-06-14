import { Component, ViewChild, ElementRef } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
//import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';

declare var google;


@IonicPage()
@Component({
  selector: 'page-proposer-t',
  templateUrl: 'proposer-t.html',
})
export class ProposerTPage {

  @ViewChild('mapCanvas') mapElement: ElementRef;
  map_canvas: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public geolocation: Geolocation) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProposerTPage');
    this.loadMap();
  }

 
  goBack()
  {
    this.navCtrl.setRoot('MenuPage');
  }
  goToProposerT()
  {
    this.navCtrl.setRoot('ProposerTPage');
  }

  public loadMap()
  {
 
    this.geolocation.getCurrentPosition().then((position) => {
 
      let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
 
      let mapOptions = {
        center: latLng,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      }
 
      this.map_canvas = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
 
    }, (err) => {
      console.log(err);
    });
 
  }

  sendTrajet()
  {
    this.alertCtrl.create({

      title: 'Success',
      message: 'Trajet enrégistré',
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
