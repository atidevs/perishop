import { Component, OnInit } from '@angular/core';

import { ValidateService } from '../../services/validate.service';
import { AuthService } from '../../services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';

import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  /**
   * User data when signing up
   */
  name: String;
  username: String;
  email: String;
  password: String;

  constructor(
    private validateService: ValidateService,
    private flashMessage: FlashMessagesService,
    private authService: AuthService,
    private router: Router) { }

  ngOnInit() {
  }

  onSignUpSubmit() {
    const user = {
      name: this.name,
      email: this.email,
      username: this.username,
      password: this.password
    }

    // Required fields
    if (!this.validateService.validateSignUp(user)) {
      this.flashMessage.show('Please Fill in all Fields !', { cssClass: 'alert-danger', timeout: 3000 });
      return false;
    }

    // Email validation
    if (!this.validateService.validateEmail(user.email)) {
      this.flashMessage.show('Please use a Valid Email !', { cssClass: 'alert-danger', timeout: 3000 });
      return false;
    }

    // Sign up User
    this.authService.signUpUser(user).subscribe((data: any) => {
      if (data.success) {
        console.log(data);
        this.flashMessage.show(`${data.msg} `, { cssClass: 'alert-success', timeout: 3000 });
        this.router.navigate(['/login']);
      } else {
        this.flashMessage.show('Something went wrong !', { cssClass: 'alert-danger', timeout: 3000 });
        this.router.navigate(['/signup']);
      }
    });
  }

}
