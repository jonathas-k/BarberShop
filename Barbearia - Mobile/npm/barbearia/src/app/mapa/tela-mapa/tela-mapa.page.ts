import { Component, OnInit } from '@angular/core';

import * as Leaflet from 'leaflet';
import { antPath } from 'leaflet-ant-path';

import { Geolocation } from '@ionic-native/geolocation/ngx';
import { NativeGeocoder, NativeGeocoderOptions, NativeGeocoderResult } from '@ionic-native/native-geocoder/ngx';

@Component({
  selector: 'app-tela-mapa',
  templateUrl: './tela-mapa.page.html',
  styleUrls: ['./tela-mapa.page.scss'],
})
export class TelaMapaPage {
  lat: any; 
  long: any;
  accuracy: any;

  map : Leaflet.Map;

  constructor(
    private geolocation: Geolocation,
    private nativeGeocoder: NativeGeocoder
  ) {}

  geoInformation() {
    this.geolocation.getCurrentPosition().then((data) => {
      this.lat = data.coords.latitude;
      this.long = data.coords.longitude;
      this.accuracy = data.coords.accuracy;
     }).catch((error) => {
       alert(error);
     });
  }

  leafletMap() {
    // -22.231977193122866, -45.929504787972036 <-- coordenada Senac
    
    this.map = Leaflet.map('mapId').setView([-22.231977193122866, -45.929504787972036],16);
    Leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'edupala.com © Angular LeafLet',
    }).addTo(this.map);

    const markPoint = Leaflet.marker([-22.231977193122866, -45.929504787972036]);
    this.map.addLayer(markPoint);
  }

  /** Remove map when we have multiple map object */
  ngOnInit() {
    this.leafletMap();
  }
}
