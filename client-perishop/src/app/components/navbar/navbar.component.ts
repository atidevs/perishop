import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  user = {
    name: 'Atmane', // user name
    isAuth: false // is the user authenticated
  };

  constructor() { }

  ngOnInit() {
  }

}
