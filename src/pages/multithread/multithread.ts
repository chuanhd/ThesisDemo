import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { ApiProvider } from './../../providers/api/api';
import { Observable } from 'rxjs/Observable';
import { IonicImageLoader } from 'ionic-image-loader';


@Component({
  selector: 'page-multithread-demo',
  templateUrl: 'multithread.html'
})
export class MultithreadPage {
  images: string[] = [];
  
    constructor() {
      for (let i = 0; i < 30; i++) {
        const url = "http://lorempixel.com/1920/1920/abstract/?v=" + Date.now() + i;
        this.images.push(url);
      }
    }  
  
}
