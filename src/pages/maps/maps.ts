import { Component, ElementRef, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GoogleMaps, GoogleMap, CameraPosition, LatLng, GoogleMapsEvent } from '@ionic-native/google-maps';

@Component({
  selector: 'page-maps-demo',
  templateUrl: 'maps.html'
})

export class MapsPage {
@ViewChild('map') mapElement: ElementRef;
map: GoogleMap;

constructor(public navCtrl: NavController,private _googleMaps: GoogleMaps) { }

ngAfterViewInit(){
  this.initMap();
}

initMap(){
  let element = this.mapElement.nativeElement;
  let loc: LatLng = new LatLng(40.7128, -74.0059);

  this.map = this._googleMaps.create(element,{ styles: []});
}

}
