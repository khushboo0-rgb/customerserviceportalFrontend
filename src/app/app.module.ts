import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';


import { FormsModule } from '@angular/forms';

import { LoginComponent } from './Components/login-page/login-page.component';

import { SignupComponent } from './Components/signup/signup.component';

import { CreateRequestComponent } from './Components/create-request/create-request.component';
import { UpdateRequestComponent } from './Components/update-request/update-request.component';

import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './auth.service';


import { UpdateCustomerDetailsComponent } from './Components/update-customer-details/update-customer-details.component';
import { CountriesService } from './countries.service';
import { EllipsisPipe } from './ellipsis.pipe';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { HomePageComponent } from './Components/home-page/home-page.component';
import { Header2Component } from './Components/header2/header2.component';
import { LogoutComponent } from './Components/logout/logout.component';

import { ClosedRequestsComponent } from './Components/closed-requests/closed-requests.component';


import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { MatTooltipModule } from '@angular/material/tooltip';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';








@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,



    SignupComponent,
    CreateRequestComponent,
    UpdateRequestComponent,

    UpdateCustomerDetailsComponent,
    EllipsisPipe,
    HeaderComponent,
    FooterComponent,
    HomePageComponent,
    Header2Component,
    LogoutComponent,

    ClosedRequestsComponent,





  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    BrowserAnimationsModule,
    MatTooltipModule,



  ],

  providers: [CountriesService, AuthService,],
  bootstrap: [AppComponent]
})
export class AppModule { }
