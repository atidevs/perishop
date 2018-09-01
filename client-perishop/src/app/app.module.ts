import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { ValidateService } from './services/validate.service';
import { AuthService } from './services/auth.service';
import { ShopService } from './services/shop.service';
import { FlashMessagesModule  } from 'angular2-flash-messages';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FormsModule } from '@angular/forms';

import { UserComponent } from './components/user/user.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { NearbyshopsComponent } from './components/nearbyshops/nearbyshops.component';
import { MyshopsComponent } from './components/myshops/myshops.component';
import { HomeComponent } from './components/home/home.component';
import { AppRoutingModule } from './/app-routing.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    UserComponent,
    LoginComponent,
    SignupComponent,
    NearbyshopsComponent,
    MyshopsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    FlashMessagesModule.forRoot()
  ],
  providers: [ValidateService, AuthService, ShopService],
  bootstrap: [AppComponent]
})
export class AppModule { }
