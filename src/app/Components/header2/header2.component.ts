import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import AuthResponse from 'src/app/entity/authResponse';
import LogInRequest from 'src/app/entity/loginRequest';

@Component({
  selector: 'app-header2',
  templateUrl: './header2.component.html',
  styleUrls: ['./header2.component.css']
})
export class Header2Component implements OnInit {
  auth: LogInRequest = new LogInRequest();
  loginResponse: AuthResponse = new AuthResponse();

  constructor(private logInService: AuthService) { }

  ngOnInit(): void {

  }

}
