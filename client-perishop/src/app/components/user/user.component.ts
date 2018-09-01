import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user: Object;

  constructor(
    private authServicee: AuthService,
    private router: Router) { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('user')); 
  }
}
