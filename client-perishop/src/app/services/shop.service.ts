import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import 'rxjs/add/operator/map';
import { AuthService } from './auth.service';
import { FlashMessagesModule } from 'angular2-flash-messages';

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

  nearbyShops = {
    success: false,
    numberOfShops: 0,
    nearbyShops: [],
  };

  myShops = {
    success: false,
    numberOfShops: 0,
    myShops: []
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

      // this.http.post('http://localhost:3000/shops/nearby', this.userLocation, { headers: headers }).subscribe(res => console.log(res));

      this.http.get(`http://localhost:3000/shops/nearby/${this.userLocation.userLatitude}-${this.userLocation.userLongitude}-${this.userLocation.radius}`,
        { headers: headers }).subscribe((res: any) => {
          console.log(res);
          if (res.success) {
            this.nearbyShops.success = res.success;
            this.nearbyShops.numberOfShops = res.numberOfShops;
            this.nearbyShops.nearbyShops = res.nearbyShops;
          } else {
            this.nearbyShops.success = false;
            this.nearbyShops.numberOfShops = 0;
          }
        });
    }
  }

  // isLiked(shopName) {
  //   let headers = new HttpHeaders();
  //   headers.append('Content-Type', 'application/json');

  //   this.http.get(`http://localhost:3000/shops/nearby/isl/${this.authService.user.username}-${shopName}`, { headers: headers }).subscribe((res: any) => {
  //     console.log(res.success);
  //     return res.success;
  //   });
  // }

  // isDisliked(shopName) {
  //   let user = JSON.parse(localStorage.getItem('user'));
  //   let headers = new HttpHeaders();
  //   headers.append('Content-Type', 'application/json');

  //   this.http.get(`http://localhost:3000/shops/nearby/isd/${this.authService.user.username}-${shopName}`, { headers: headers }).subscribe((res: any) => {
  //     console.log(res.success);
  //     return res.success;
  //   });
  // }

  onDislikeShop(shopName) {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');

    this.http.get(`http://localhost:3000/shops/nearby/d/${this.authService.user.username}-${shopName}`, { headers: headers }).subscribe((res: any) => {
      console.log(res.success);
    });
  }

  onLikeShop(shopName) {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');

    this.http.get(`http://localhost:3000/shops/nearby/l/${this.authService.user.username}-${shopName}`, { headers: headers }).subscribe((res: any) => {
      console.log(res.success);
    });
  }

  getMyShops() {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');

    this.http.get(`http://localhost:3000/shops/myshops/${this.authService.user.username}`, { headers: headers }).subscribe((res: any) => {
      console.log(res.success);
      this.myShops.success = res.success;
      this.myShops.numberOfShops = res.numberOfShops;
      this.myShops.myShops = res.myShops;
    });
  }

  unLikeShop(shopName) {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');

    this.http.get(`http://localhost:3000/shops/myshops/ul/${this.authService.user.username}-${shopName}`, { headers: headers }).subscribe((res: any) => {
      if(res.success) {
        let index = this.myShops.myShops.indexOf(shopName);
        this.myShops.myShops.splice(index);
      }
    });
  }




}

