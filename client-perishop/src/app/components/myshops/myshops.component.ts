import { Component, OnInit, OnDestroy } from '@angular/core';

import { ShopService } from '../../services/shop.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-myshops',
  templateUrl: './myshops.component.html',
  styleUrls: ['./myshops.component.css']
})
export class MyshopsComponent implements OnInit {

  myShops = {
    success: false,
    numberOfShops: 0,
    myShops: []
  };

  constructor(
    private shopService: ShopService,
    private authService: AuthService) { }

  ngOnInit() {
    this.authService.user = JSON.parse(localStorage.getItem('user'));
    this.loadMyShops();
  }

  loadMyShops() {
    if (this.authService.user) {
      this.shopService.getMyShops().subscribe((data: any) => {
        console.log(data.myShops);
        this.myShops.success = data.success;
        this.myShops.numberOfShops = data.numberOfShops;
        this.myShops.myShops = data.myShops;
        for (let i = 0; i < this.myShops.myShops.length; i++) {
          this.myShops.myShops[i]["distanceAway"] = data.distances[i];
        }
      }, err => { console.log(err) });
    }
  }

  unLike(shop) {
    this.shopService.unLikeShop(shop).subscribe((data: any) => {
      if (data.success) {
        this.myShops.myShops.filter(shop => !this.myShops.myShops.includes(shop));
        alert(`${shop.name} is unliked!`);
      }
    }, err => { console.log(err) });
    this.loadMyShops();
  }
}
