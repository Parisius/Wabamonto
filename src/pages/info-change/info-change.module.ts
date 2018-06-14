import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InfoChangePage } from './info-change';

@NgModule({
  declarations: [
    InfoChangePage,
  ],
  imports: [
    IonicPageModule.forChild(InfoChangePage),
  ],
})
export class InfoChangePageModule {}
