import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UIUIDemoPage } from '../ui_and_ux/uiux'
import { AnimationPage } from '../animation/animation'
import { LayoutPage } from '../layout/layout'
import { MapsPage } from '../maps/maps'
import { ServicesPage } from '../services/services'
import { MultithreadPage } from '../multithread/multithread'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  items = [
    'UI and UX',
    'Layout',
    'Animation',
    'Web Services',
    'Third party and services',
    'Multithreading and background thread',
    'Testing'
  ];

  itemSelected(item: string) {
    console.log("Selected Item", item);

    if (item  == this.items[0]) {
      this.navCtrl.push(UIUIDemoPage);
    } else if (item == this.items[2]) {
      this.navCtrl.push(AnimationPage);
    } else if (item == this.items[1]){
		this.navCtrl.push(LayoutPage)
	  } else if (item == this.items[4]){
      this.navCtrl.push(MapsPage)
    } else if (item == this.items[3]){
      this.navCtrl.push(ServicesPage)
    } else if (item == this.items[5]){
      this.navCtrl.push(MultithreadPage)
    }

  }

  constructor(public navCtrl: NavController) {

  }

}
