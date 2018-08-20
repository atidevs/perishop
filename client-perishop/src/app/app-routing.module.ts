import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Router Module
import { RouterModule, Routes } from '@angular/router';

// Importing components
import { HomeComponent } from '../app/components/home/home.component';
import { LoginComponent } from '../app/components/login/login.component';

import { SignupComponent } from '../app/components/signup/signup.component';
import { UserComponent } from '../app/components/user/user.component';
import { NearbyshopsComponent } from '../app/components/nearbyshops/nearbyshops.component';
import { MyshopsComponent } from '../app/components/myshops/myshops.component';

// Mapping routes to components
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'user', component: UserComponent },
  { path: 'nearby', component: NearbyshopsComponent },
  { path: 'myshops', component: MyshopsComponent }
];

@NgModule({
  exports: [RouterModule],
  imports: [
    CommonModule,
    // Passing routes to the RouterModule
    RouterModule.forRoot(routes)],
  declarations: []
})
export class AppRoutingModule { }