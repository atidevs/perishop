import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authToken: any;
  user: any;

  constructor(private http: HttpClient) { }

  signUpUser(user) {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');

    return this.http.post('http://localhost:3000/users/signup', user, { headers: headers }).map(res => res);
  }

  authenticateUser(user) {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');

    return this.http.post('http://localhost:3000/users/login', user, { headers: headers }).map(res => res);
  }

  loadToken() {
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }

  loggedIn() {
    if(localStorage.getItem('id_token')) {
      return true;
    } else {
      return false;
    }
  }

  storeUserData(token, user) {
    localStorage.setItem('id_token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }

  logOut() {
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  }
}
