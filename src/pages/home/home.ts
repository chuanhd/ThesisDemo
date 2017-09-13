import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UIUIDemoPage } from '../ui_and_ux/uiux'

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
    } else if (item == this.items[1]) {

    }
    
  }

  constructor(public navCtrl: NavController) {

  }

}
