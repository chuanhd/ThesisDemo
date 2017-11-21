import { Component, ElementRef, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GoogleMaps, GoogleMap, CameraPosition, GoogleMapOptions, LatLng, GoogleMapsEvent } from '@ionic-native/google-maps';

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
  // let loc: LatLng = new LatLng(21.0398407, 105.784294);

  let mapOptions: GoogleMapOptions = {
    camera: {
      target: {
        lat: 21.0398407,
        lng: 105.784294
      },
      zoom: 13,
      tilt: 60
    }
  };

  this.map = this._googleMaps.create(element, mapOptions);
}

}
