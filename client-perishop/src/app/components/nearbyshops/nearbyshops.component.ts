import { Component, OnInit } from '@angular/core';
import { ShopService } from '../../services/shop.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-nearbyshops',
  templateUrl: './nearbyshops.component.html',
  styleUrls: ['./nearbyshops.component.css']
})
export class NearbyshopsComponent implements OnInit {

  nearbyShops = {
    success: false,
    numberOfShops: 0,
    nearbyShops: []
  };

  radius = 5;

  constructor(
    private shopService: ShopService,
    private flashMessage: FlashMessagesService,
    private authService: AuthService) { }

  ngOnInit() {
    this.authService.user = JSON.parse(localStorage.getItem('user'));
    this.getUserLocation();
  }

  getUserLocation() {
    navigator.geolocation.getCurrentPosition(position => {
      this.shopService.userLocation.userLatitude = Number(position.coords.longitude.toFixed(5));
      this.shopService.userLocation.userLongitude = Number(position.coords.latitude.toFixed(5));
    });
    this.shopService.locationLoaded = true;
  }

  getShops() {
    this.shopService.getNearbyShops(this.radius).subscribe((data: any) => {
      if (data.success) {
        this.flashMessage.show(`${data.numberOfShops} Shops found! Loading...`, { cssClass: 'alert-success', timeout: 3000 });
        console.log(data);
        this.nearbyShops.success = data.success;
        this.nearbyShops.numberOfShops = data.numberOfShops;
        this.nearbyShops.nearbyShops = data.nearbyShops;
        for (let i = 0; i < this.nearbyShops.nearbyShops.length; i++) {
          this.nearbyShops.nearbyShops[i]["distanceAway"] = data.distances[i];
          this.isTimeExpried(this.nearbyShops.nearbyShops[i]._id);
        }

      } else {
        this.flashMessage.show('No shops found, please increase radius!', { cssClass: 'alert-danger', timeout: 3000 });
      }
    }, err => { console.log(err) });
  }

  onDislikeShop(shop) {
    let date = new Date().getHours();
    this.shopService.onDislikeShop(shop._id, date).subscribe((data: any) => {
      console.log(data);
      this.nearbyShops.nearbyShops = this.nearbyShops.nearbyShops.filter(item => item._id != shop._id);
      alert(`${shop.name} ${data.msg}`);
      this.isTimeExpried(shop._id);
    }, err => { console.log(err) });
  }

  onLikeShop(shop) {
    this.shopService.onLikeShop(shop._id).subscribe((data: any) => {
      console.log(data);
      alert(`${shop.name} ${data.msg}`);
    }, err => { console.log(err) });
  }

  isTimeExpried(shopId) {
    this.shopService.isDisliked(shopId).subscribe((res: any) => {
      console.log(res);
      if (res.disliked && !res.timeExpired) {
        this.nearbyShops.nearbyShops = this.nearbyShops.nearbyShops.filter(shop => shop._id != shopId);
        console.log(this.nearbyShops.nearbyShops);
      }
    });
  }
}