import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
/**
 * Generated class for the ForgetPassPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-forget-pass',
  templateUrl: 'forget-pass.html',
})
export class ForgetPassPage {
  forgetForm: FormGroup;
  submitAttempt: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController,public formBuilder: FormBuilder ) {

    this.forgetForm = formBuilder.group({
      mail: ['',Validators.compose([Validators.maxLength(50), Validators.pattern('^[a-zA-z0-9_.+-]+@[a-zA-z0-9_.+]+.[a-zA-z0-9_.+-.]+$'), Validators.required])]
  });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ForgetPassPage');
  }

  goToLogin()
  {
    this.submitAttempt = true;
 
    if(!this.forgetForm.valid){
        console.log("error!");
    }
    
    else {
        this.navCtrl.setRoot('HomePage');
        let toast = this.toastCtrl.create({
          message: 'Vous recevrez un lien de réinitialisation dans la boîte mail indiquée',
          duration: 3000,
          position: 'middle'
        });
      
        toast.onDidDismiss(() => {
          console.log('Dismissed toast');
        });
      
        toast.present();
        console.log("success!");
        console.log(this.forgetForm.value);
    }
    
  }

  goToRegister()
  {
    this.navCtrl.setRoot('SignupPage');
  }
}
