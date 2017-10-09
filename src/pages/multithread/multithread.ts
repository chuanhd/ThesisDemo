import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { ApiProvider } from './../../providers/api/api';
import { Observable } from 'rxjs/Observable';
import { ImgLoader } from 'ionic-image-loader';

@Component({
  selector: 'page-multithread-demo',
  templateUrl: 'multithread.html'
})
export class MultithreadPage {
  images: string[] = [
    'assets/img/AMG_7675.JPG',
    
  ];
  constructor(public loadingCtrl: LoadingController) {
  }

  presentLoadingDefault() {
    const loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    
    loading.present();
    setTimeout(() => {
      loading.dismiss();
    }, 5000);
  }
}
