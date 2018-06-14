import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WhatsupPage } from './whatsup';

@NgModule({
  declarations: [
    WhatsupPage,
  ],
  imports: [
    IonicPageModule.forChild(WhatsupPage),
  ],
})
export class WhatsupPageModule {}
