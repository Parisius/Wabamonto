import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController } from 'ionic-angular';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { PasswordValidator } from '../../validators/password.validator';

/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  signupForm: FormGroup;
  submitAttempt: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams,public formBuilder: FormBuilder, public toastCtrl: ToastController ) {
    this.signupForm = formBuilder.group({
      mail: ['',Validators.compose([Validators.maxLength(50), Validators.pattern('^[a-zA-z0-9_.+-]+@[a-zA-z0-9_.+]+.[a-zA-z0-9_.+-.]+$'), Validators.required])],
      phonenum: ['',Validators.compose([Validators.maxLength(8), Validators.pattern('[0-9]'), Validators.required])],
      password:['',Validators.compose([
        Validators.minLength(5),
        Validators.required,
        Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')])],
      passconfirm: ['', Validators.required]
  },(formGroup: FormGroup)=> {
    return PasswordValidator.areEqual(formGroup);} );
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

  goToLogin()
  {
  
    this.submitAttempt = true;
 
    if(!this.signupForm.valid){
        console.log("error!");
    }
    
    else {
        this.navCtrl.setRoot('HomePage');
        let toast = this.toastCtrl.create({
          message: 'Inscription reussie!!',
          duration: 3000,
          position: 'middle'
        });
      
        toast.onDidDismiss(() => {
          console.log('Dismissed toast');
        });
      
        toast.present();
        console.log("success!");
        console.log(this.signupForm.value);
    }
    
  }
}
