import { Component, OnInit } from '@angular/core';
import { ShopService } from '../../services/shop.service';

@Component({
  selector: 'app-nearbyshops',
  templateUrl: './nearbyshops.component.html',
  styleUrls: ['./nearbyshops.component.css']
})
export class NearbyshopsComponent implements OnInit {

  nearbyShops = Array;
  numberOfShops: Number;
    

  constructor(private shopService: ShopService) { }

  ngOnInit() {
    this.shopService.getNearbyShops();
    console.log(this.shopService.nearbyShops);
    this.numberOfShops = this.shopService.nearbyShops.numberOfShops;
    this.nearbyShops = this.shopService.nearbyShops.nearbyShops;
  }

}
