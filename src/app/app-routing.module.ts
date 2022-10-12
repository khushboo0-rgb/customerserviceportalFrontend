import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from 'src/app/Components/login-page/login-page.component';
import { SignupComponent } from './Components/signup/signup.component';

import { CreateRequestComponent } from './Components/create-request/create-request.component';
import { UpdateRequestComponent } from './Components/update-request/update-request.component';


import { HomePageComponent } from './Components/home-page/home-page.component';
import { LogoutComponent } from './Components/logout/logout.component';
import { ClosedRequestsComponent } from './Components/closed-requests/closed-requests.component';

import { UpdateCustomerDetailsComponent } from './Components/update-customer-details/update-customer-details.component';


import { AuthGuard } from './auth.guard';

const routes: Routes =

  [
    { path: "", redirectTo: "login", pathMatch: "full" },

    { path: "login", component: LoginComponent },
    { path: "signUp", component: SignupComponent },


    {
      path: 'createRequest',
      component: CreateRequestComponent,
      canActivate: [AuthGuard]
    },
    { path: "updateRequest", component: UpdateRequestComponent, canActivate: [AuthGuard] },


    { path: "home", component: HomePageComponent },
    { path: "logout", component: LogoutComponent, canActivate: [AuthGuard] },

    { path: "closedRequest", component: ClosedRequestsComponent, canActivate: [AuthGuard] },



    { path: "updatecustomerdetails", component: UpdateCustomerDetailsComponent, canActivate: [AuthGuard] },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
