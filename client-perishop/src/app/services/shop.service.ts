import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import 'rxjs/add/operator/map';
import { AuthService } from './auth.service';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class ShopService {

  locationLoaded = false; //default false
  userLocation = {
    userLatitude: 0,
    userLongitude: 0,
    radius: 5 //default 5Km
  };

  constructor(
    private http: HttpClient,
    private authService: AuthService) { }

  getNearbyShops(radius) {
    if (this.locationLoaded) {
      this.userLocation.radius = radius;
      console.log(this.userLocation);

      let headers = new HttpHeaders();
      headers.append('Content-Type', 'application/json');

      return this.http.get(`http://localhost:3000/shops/nearby/${this.userLocation.userLatitude}-${this.userLocation.userLongitude}-${this.userLocation.radius}`,
        { headers: headers });
    }
  }

  onDislikeShop(shopId, date) {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');

    return this.http.get(`http://localhost:3000/shops/nearby/d/${this.authService.user.username}-${shopId}-${date}`, { headers: headers });
  }

  onLikeShop(shopId) {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');

    return this.http.get(`http://localhost:3000/shops/nearby/l/${this.authService.user.username}-${shopId}`, { headers: headers });
  }

  getMyShops() {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');

    return this.http.get(`http://localhost:3000/shops/myshops/${this.authService.user.username}`, { headers: headers });
  }

  unLikeShop(shop) {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');

    return this.http.get(`http://localhost:3000/shops/myshops/ul/${this.authService.user.username}-${shop._id}`, { headers: headers });
  }
}

