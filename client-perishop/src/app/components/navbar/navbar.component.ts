import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  user: Object;

  constructor(
    private authService: AuthService,
    private router: Router,
    private flashMessage: FlashMessagesService) { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('user'));
  }

  onLogOut() {
    this.authService.logOut();
    this.flashMessage.show('You are now logged Out', { cssClass: 'alert-success', timeout: 3000 });
    this.router.navigate(['/login']);
    return false;
  }

}
