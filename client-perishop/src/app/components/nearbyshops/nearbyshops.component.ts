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

  nearbyShops: Array<{}>;
  numberOfShops: number;
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
    this.shopService.getNearbyShops(this.radius);
    this.flashMessage.show('Searching... Please wait!', { cssClass: 'alert-info', timeout: 3000 });
    setTimeout(() => {
      this.flashMessage.show('Please, try loading shops...', { cssClass: 'alert-success', timeout: 2000 });
    },
      3000);
  }

  loadShops() {
    if (!this.shopService.nearbyShops.success) {
      this.flashMessage.show('No shops found, please increase radius!', { cssClass: 'alert-danger', timeout: 3000 });
    } else {
      this.numberOfShops = this.shopService.nearbyShops.numberOfShops;
      this.nearbyShops = this.shopService.nearbyShops.nearbyShops;
      this.flashMessage.show(`${this.numberOfShops} Shops found! Loading...`, { cssClass: 'alert-success', timeout: 4000 });
    }
  }

  onDislikeShop(shopName) {
    alert(`${shopName} is disliked!`);
    this.shopService.onDislikeShop(shopName);
  }

  onLikeShop(shopName) {
    alert(`${shopName} is liked!`);
    this.shopService.onLikeShop(shopName);
  }

}