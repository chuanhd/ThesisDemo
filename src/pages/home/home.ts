import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UIUIDemoPage } from '../ui_and_ux/uiux'
import { AnimationPage } from '../animation/animation'

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
    'Game',
    'Multithreading and background thread',
    'Testing'
  ];

  itemSelected(item: string) {
    console.log("Selected Item", item);

    if (item  == this.items[0]) {
      this.navCtrl.push(UIUIDemoPage);
    } else if (item == this.items[2]) {
      this.navCtrl.push(AnimationPage);
    }

  }

  constructor(public navCtrl: NavController) {

  }

}
