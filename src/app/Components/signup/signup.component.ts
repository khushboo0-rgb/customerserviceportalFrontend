import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { countries } from '../store/country-data-store';
import AuthResponse from 'src/app/entity/authResponse';
import SignupRequest from 'src/app/entity/SignUpRequest';
import { CountriesService } from 'src/app/countries.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CustomValidators } from 'src/app/custom-validators';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent {

  public frmSignup: FormGroup;
  public baseColor = '#FFF';
  public strengthLabels = ['', '(Weak)', '(Average)', '(Strong)', '(Very Strong)'];
  public myColors = ['#DD2C00', '#FF6D00', '#FFD600', '#AEEA00', '#00C853'];
  public countries: any = countries
  stateInfo: any[] = [];
  countryInfo: any[] = [];
  cityInfo: any[] = [];
  futureDate: any;




  auth: SignupRequest = new SignupRequest();
  authResponse: AuthResponse = new AuthResponse();


  createSignupForm(): FormGroup {
    return this.fb.group(
      {
        email: [
          null,
          Validators.compose([Validators.email, Validators.required])
        ],
       
       
        password: [
          null,
          Validators.compose([
            Validators.required,
            // check whether the entered password has a number
            CustomValidators.patternValidator(/\d/, {
              hasNumber: true
            }),
            // check whether the entered password has upper case letter
            CustomValidators.patternValidator(/[A-Z]/, {
              hasCapitalCase: true
            }),
            // check whether the entered password has a lower case letter
            CustomValidators.patternValidator(/[a-z]/, {
              hasSmallCase: true
            }),
            // check whether the entered password has a special character
            CustomValidators.patternValidator(
              /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/,
              {
                hasSpecialCharacters: true
              }
            ),
            Validators.minLength(8)
          ])
        ],
        confirmPassword: [null, Validators.compose([Validators.required])]
      },
      {
        // check whether our password and confirm password match
        validator: CustomValidators.passwordMatchValidator
      }
    );
  }

  keyPressNumbers(event) {
    var charCode = (event.which) ? event.which : event.keyCode;
    // Only Numbers 0-9
    if ((charCode < 48 || charCode > 57)) {
      event.preventDefault();
      return false;
    } else {
      return true;
    }
  }

  public account = {
    password: <string>null
  };


  getSelectedValue(value: any) {

    // Prints selected value
    console.log(value);
  }

  disableFutureDate() {

    var date: any = new Date();

    var todayDate: any = date.getDate();

    var month: any = date.getMonth() + 1;

    var year: any = date.getFullYear();

    if (todayDate < 10) {

      todayDate = '0' + todayDate;

    }

    if (month < 10) {

      month = '0' + month;

    }

    this.futureDate = year + "-" + month + "-" + todayDate;






  }
  createUser() {


    this.authService.createUser(this.auth).subscribe(
      resp => {
        this.authResponse = resp;
        alert("User Created Successfully");
        this.router.navigate(['login']);

        // window.location.reload()

      }, err => {
        this.authResponse = err;
        alert("Something went wrong");
      }
    ),
      console.log(this.frmSignup.value);
  }
  getCountries() {
    this.country.allCountries().
      subscribe(
        data2 => {
          this.countryInfo = data2.Countries;
          console.log('Data:', this.countryInfo);
        },
        err => console.log(err),
        () => console.log('complete')
      )

  }

  onChangeCountry(countryValue) {
    this.auth.country = this.countryInfo[countryValue].CountryName;

    this.stateInfo = this.countryInfo[countryValue].States;
    this.cityInfo = this.stateInfo[0].Cities;

  }

  onChangeState(stateValue) {
    this.auth.state = this.stateInfo[stateValue].StateName;
    this.cityInfo = this.stateInfo[stateValue].Cities;

  }


  checkDuplicate() {
    this.authService.checkduplicateUser(this.auth).subscribe(
      resp => {
        if (resp) {
          alert("User with email already present");
        }
      },
      err => {
        alert("Error");
      }
    )
  }
  keyPressAlphaNumeric(event) {

    var inp = String.fromCharCode(event.keyCode);

    if (/[a-zA-Z0-9]/.test(inp)) {
      return true;
    } else {
      event.preventDefault();
      return false;
    }
  }

  constructor(private authService: AuthService, private country: CountriesService, private fb: FormBuilder,private router: Router) {
    this.frmSignup = this.createSignupForm();
  }

  ngOnInit() {


    this.getCountries();
    this.disableFutureDate();

  }
}