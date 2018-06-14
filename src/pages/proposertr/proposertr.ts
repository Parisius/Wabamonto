import { Component, ViewChild, ElementRef } from '@angular/core';
import { App, IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { Geolocation } from '@ionic-native/geolocation';

declare var google;
@IonicPage()
@Component({
  selector: 'page-proposertr',
  templateUrl: 'proposertr.html',
})

export class ProposertrPage {

  public trajetForm: FormGroup;

  public departure: AbstractControl;
  public arrival: AbstractControl;
  public date: AbstractControl;
  
  @ViewChild('mapCanvas') mapElement: ElementRef;
  map_canvas: any;
  constructor(public app: App, public navCtrl: NavController, public navParams: NavParams, public fb: FormBuilder, public geolocation: Geolocation) 
  {  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProposertrPage');
    this.loadMap();
    
  }

  goToProposerT1()
  {
    this.navCtrl.setRoot('ProposerTPage');
  }

  goBack()
  {
    this.navCtrl.setRoot('MenuPage');
  }
    

  public ngOnInit(): void
  {
    this.trajetForm = this.fb.group(
      {
       departure: ['Haie Vive', Validators.compose([Validators.required])],
       arrival: ['Suru Lere', Validators.compose([Validators.required])],
       date: ['', Validators.compose([Validators.required])],
      }
    );
    this.departure = this.trajetForm.controls['departure'];
    this.arrival =  this.trajetForm.controls['arrival'];
    this.date = this.trajetForm.controls['date'];
  }

  public next()
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
  function(success){
    console.log(success);
  }

  addMarker(){
 
    let marker = new google.maps.Marker({
      map: this.map_canvas,
      animation: google.maps.Animation.DROP,
      position: this.map_canvas.getCenter()
    });
   
    let content = "<h4>Information!</h4>";         
   
    this.addInfoWindow(marker, content);
   
  }
  addInfoWindow(marker, content){
 
    let infoWindow = new google.maps.InfoWindow({
      content: content
    });
   
    google.maps.event.addListener(marker, 'click', () => {
      infoWindow.open(this.map_canvas, marker);
    });
   
  }
    
  //AIzaSyBP1JPppUAQc8nSOnDBFkuq-60sc8ZpX48

  /* public login() {

    if (!this.loginForm.valid) {

      return;
    }

    this.alertCtrl.create({

      title: 'Success',
      message: 'Implement your logic here, a code snippet can be seen in the source.',
      buttons: ['OK']

    }).present();

    // example login procedure...

    // this
    //   .authService
    //   .signInWithEmailAndPassword(this.email.value, this.password.value)
    //   .catch((error: Error) => {

    //    there you have it a generic way of catching errors, for more details see:
    //    https://www.ionicrun.com/http-error-handling-informing-the-user-in-an-ionic-2-app/

    //     this
    //       .events
    //       .publish(ENV.EVENTS.ERROR, error);

    //   });

  } */
}
