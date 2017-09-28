import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the ApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ApiProvider {

  constructor(public http: Http) {
    console.log('Hello ApiProvider Provider');
  }
  getPhotos() {
    return this.http.get('https://api.500px.com/v1/photos?feature=popular&consumer_key=16Q2N9PUvzZIuJXOjGiHdZbUa20PU3jg9SJnQAvr').map(res => res.json());
  }
}
