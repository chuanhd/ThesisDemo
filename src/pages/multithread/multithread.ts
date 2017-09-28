import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ApiProvider } from './../../providers/api/api';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'page-services-demo',
  templateUrl: 'services.html'
})
export class ServicesPage {
  photolist: Observable<any>;
  constructor(public navCtrl: NavController, public apiProvider: ApiProvider) { 
    
  }
  ionGet(){
    this.apiProvider.getPhotos().subscribe(data => {
      this.photolist = data;
      console.log(data);
   });
  }
}
