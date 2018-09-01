import { Component, OnInit } from '@angular/core';

import { ShopService } from '../../services/shop.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-myshops',
  templateUrl: './myshops.component.html',
  styleUrls: ['./myshops.component.css']
})
export class MyshopsComponent implements OnInit {

  myShops: Array<{}>;
  numberOfShops = 0;
  user = {};

  constructor(
    private shopService: ShopService,
    private authService: AuthService) { }

  ngOnInit() {
    this.authService.user = JSON.parse(localStorage.getItem('user'));
    this.loadMyShops();
  }

  loadMyShops() {
    if (this.authService.user) {
      this.shopService.getMyShops();
    }
    this.myShops = this.shopService.myShops.myShops;
    this.numberOfShops = this.shopService.myShops.numberOfShops;
  }

  unLike(shopName) {
    this.shopService.unLikeShop(shopName);
    this.ngOnInit();
  }

}
