import { Component, Input, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
// import * as ee from '@google/earthengine';
import axios from 'axios';
import { DroneService } from 'src/app/services/drone.service';

declare var google;

@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage implements OnInit {
  private droneId: number;
  private poly: any;
  private map: any;
  private lng: number;
  private lat: number;
  private marker: any;
  private zoomLevel: any;
  private dist1: number = 0;
  private dist2: number = 0;
  constructor(
    private history: Location,
    private droneService: DroneService,
    private router: Router
  ) {}

  ngOnInit() {
    //this.droneId = history.state.droneId;

    this.getCurrentLocation().then(() => {
      this.initMap();
      this.initSearch();
      this.marker = new google.maps.Marker({
        position: { lat: this.lat, lng: this.lng },
        map: this.map,
        draggable: true,
      });
      this.marker.setVisible(false);
    });
  }

  getCurrentLocation(): Promise<any> {
    return new Promise(async (resolve, reject) => {
      let res: any = await axios.post(
        ''
      );
      this.lat = res.data.location.lat;
      this.lng = res.data.location.lng;
      console.log(res.data.location);
      resolve(true);
    });
  }

  async setViewToCurrentLoc(): Promise<void> {
    await this.getCurrentLocation();
    this.map.setCenter({ lat: this.lat, lng: this.lng });
  }

  initSearch(): void {
    const input = document.getElementById('search_input') as HTMLInputElement;
    const options = {
      //componentRestrictions: { country: 'kr' },
      fields: ['address_components', 'geometry', 'icon', 'name'],
      types: ['establishment', 'geocode'],
      // strictBounds: true,
    };

    const autocomplete = new google.maps.places.Autocomplete(input, options);
    autocomplete.setFields(['place_id', 'geometry', 'name']);
    autocomplete.addListener('place_changed', () => {
      const place = autocomplete.getPlace();
      console.log(place);
      const lat = place.geometry.location.lat();
      const lng = place.geometry.location.lng();
      console.log(lat, lng);
      this.map.setCenter({ lat, lng });
      this.map.setZoom(19);
      this.marker.setPosition({ lat, lng });
      this.marker.setVisible(true);
    });
  }

  initMap(): void {
    this.map = new google.maps.Map(
      document.getElementById('map') as HTMLElement,
      {
        center: { lat: this.lat, lng: this.lng },
        zoom: 18,
        mapTypeId: google.maps.MapTypeId.SATELLITE,
      }
    );
    this.poly = new google.maps.Polyline({
      strokeColor: '#000000',
      strokeOpacity: 1.0,
      strokeWeight: 3,
    });
    this.poly.setMap(this.map);

    console.log(this.poly);

    this.map.addListener('click', (event) => {
      const path = this.poly.getPath();
      if (path.length == 3) {
        alert('최대 3개의 지점만 선택할 수 있습니다.\n 다시 그리세요.');
        return;
      }
      console.log(path.xd);
      console.log(event.latLng.lat(), event.latLng.lng());
      path.push(event.latLng);

      // Add a new marker at the new plotted point on the polyline.
      new google.maps.Marker({
        position: event.latLng,
        title: '#' + path.getLength(),
        map: this.map,
      });
    });
  }
  back(): void {
    this.history.back();
  }

  async savePath(): Promise<void> {
    const arr = this.poly.getPath().getArray();

    var result = [[arr[0].lat(), arr[0].lng(), 0]];

    for (let i = 1; i < arr.length; i++) {
      const dist = this.getDistince(
        arr[i - 1].lng(),
        arr[i - 1].lat(),
        arr[i].lng(),
        arr[i].lat()
      );
      result.push([arr[i].lat(), arr[i].lng(), dist]);
    }

    // await this.droneService.setFlight(this.droneId, result[1][2], result[2][2]);
    this.dist1 = Math.floor(result[1][2]);
    this.dist2 = Math.floor(result[2][2]);
    //this.history.back();

    console.log(result);
  }
  // Calculate the distance between two points in km's
  getDistince(lng1: number, lat1: number, lng2: number, lat2: number): number {
    if (lng1 == lng2 && lat1 == lat2) {
      return 0;
    } else {
      const theta = lng1 - lng2;
      let dist =
        Math.sin(this.deg2rad(lat1)) * Math.sin(this.deg2rad(lat2)) +
        Math.cos(this.deg2rad(lat1)) *
          Math.cos(this.deg2rad(lat2)) *
          Math.cos(this.deg2rad(theta));
      dist = Math.acos(dist);
      dist = this.rad2deg(dist);
      dist = dist * 60 * 1.1515;
      dist = dist * 1609.344; // not kilometers

      return dist;
    }
  }
  // This function converts decimal degrees to radians
  deg2rad(deg: number): number {
    return (deg * Math.PI) / 180.0;
  }

  // This function converts radians to decimal degrees
  rad2deg(rad: number) {
    return (rad * 180) / Math.PI;
  }

  zoomHTML(): void {
    var mapDiv = document.querySelector('#map') as HTMLElement;
    console.log(mapDiv.style.width);
    mapDiv.style.width = this.zoomLevel + '%';

    mapDiv.style.height = this.zoomLevel + '%';
    console.log(mapDiv.style.width);
  }
}
