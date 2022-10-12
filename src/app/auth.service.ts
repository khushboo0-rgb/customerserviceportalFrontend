import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import AuthResponse from './entity/authResponse';
import LogInRequest from './entity/loginRequest';
import SignupRequest from './entity/SignUpRequest';

import { environment } from 'src/environments/environment';

// const LOGIN_BASE_URL=environment.URL+"8086/customerServiceUser"
const LOGIN_BASE_URL="https://wdhoxhkl5b.execute-api.ap-northeast-1.amazonaws.com/Dev-phase/"

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 
  

  login(auth:LogInRequest){
    return this.http.post<AuthResponse>(LOGIN_BASE_URL+"loginuser",auth);
  }
  getCustomerById(userEmail){
    return this.http.get (LOGIN_BASE_URL+"savecustomeruser/"+userEmail);
  }
  updateCustomer(st, userId) {
    return this.http.put(LOGIN_BASE_URL +"updateuser/" + st.userId, st);
  }
  checkduplicateUser(auth:SignupRequest){
    return this.http.post(LOGIN_BASE_URL+"checkduplicateuser",auth);
  }

  createUser(auth:SignupRequest){
    
    return this.http.post<AuthResponse>(LOGIN_BASE_URL+"signupuser",auth);
  }

 
  constructor(private http:HttpClient) {}
}