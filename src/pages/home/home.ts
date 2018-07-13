import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@IonicPage( { name: 'HomePage' } )
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  loginForm: FormGroup;
  submitAttempt: boolean = false;

  constructor(public navCtrl: NavController, public formBuilder: FormBuilder) {

    this.loginForm = formBuilder.group({
      mail: ['',Validators.compose([Validators.maxLength(50), Validators.pattern('^[a-zA-z0-9_.+-]+@[a-zA-z0-9_.+]+.[a-zA-z0-9_.+-.]+$'), Validators.required])],
      password: ['']
  });

  }
  doLogin()
  {
    this.submitAttempt = true;
 
    if(!this.loginForm.valid){
        console.log("error!");
    }
    
    else {
        this.navCtrl.setRoot('MenuPage');
        console.log("success!");
        console.log(this.loginForm.value);
    }
    
  }

  goToRegister()
  {
    this.navCtrl.setRoot('SignupPage');
  }

  goToForgotten()
  {
    this.navCtrl.setRoot('ForgetPassPage');
  }


}
