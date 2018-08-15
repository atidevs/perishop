import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  shopsImages = [
    "../../../assets/shop_images/shop1.jpg",
    "../../../assets/shop_images/shop2.jpg",
    "../../../assets/shop_images/shop3.jpg",
    "../../../assets/shop_images/shop4.jpg"
  ];

  constructor() { }

  ngOnInit() {
  }

}
