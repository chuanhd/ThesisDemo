import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UIUISignUpPage } from '../sign_up/signup'
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions';



@Component({
  selector: 'page-uiux-demo',
  templateUrl: 'uiux.html'
})
export class UIUIDemoPage {
	
	login(){
		let options: NativeTransitionOptions = {
		  direction: 'up',
		  duration: 1000,
		  iosdelay: 100,
		  androiddelay: 150,
		};
		this.nativePageTransitions.flip(options);
		this.navCtrl.push(UIUISignUpPage);
	}
  constructor(public navCtrl: NavController, private nativePageTransitions: NativePageTransitions) {
	//this.navCtrl.push(UIUISignUpPage);
  }
  //constructor() { }
}