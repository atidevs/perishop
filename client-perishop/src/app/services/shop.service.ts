import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  locationLoaded = true; //default false
  userLocation = {
    userLatitude: 0,
    userLongitude: 0,
    radius: 0
  };

  nearbyShops: any;

  constructor(private http: HttpClient) { }

  getNearbyShops() {
    this.getUserLocation();
    if (this.locationLoaded) {
      console.log(this.userLocation);
      let headers = new HttpHeaders();
      headers.append('Content-Type', 'application/json');

      this.http.post('http://localhost:3000/shops/nearby', this.userLocation, { headers: headers }).subscribe(res => { console.log(res); });

      this.http.get('http://localhost:3000/shops/nearby', { headers: headers }).subscribe(res => {
        console.log(res);
        this.nearbyShops = res;
      });
    }
  }

  getUserLocation() {
    navigator.geolocation.getCurrentPosition(position => {
      this.userLocation.userLatitude = Number(position.coords.longitude.toFixed(5));
      this.userLocation.userLongitude = Number(position.coords.latitude.toFixed(5));
    });
    this.locationLoaded = true;
  }
}

