import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import SignupRequest from 'src/app/entity/SignUpRequest';




@Component({
  selector: 'app-update-customer-details',
  templateUrl: './update-customer-details.component.html',
  styleUrls: ['./update-customer-details.component.css']
})
export class UpdateCustomerDetailsComponent implements OnInit {

  auths: SignupRequest[] = [];
  auth: SignupRequest = new SignupRequest();


  userId: number = 0;
  futureDate: any;

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
  keyPressAlphaNumeric(event) {

    var inp = String.fromCharCode(event.keyCode);

    if (/[a-zA-Z0-9]/.test(inp)) {
      return true;
    } else {
      event.preventDefault();
      return false;
    }
  }
  
  updateCustomer(st, j) {

    this.auth.userId = st.userId
    this.auth.country = st.country
    this.auth.firstName = st.firstName;
    this.auth.lastName = st.lastName;
    this.auth.contactNo = st.contactNo;
    this.auth.customerAddress = st.customerAddress;
    this.auth.state = st.state;
    this.auth.pan = st.pan;
    this.auth.dateOfBirth = st.dateOfBirth;
    this.auth.contactPreference = st.contactPreference;




  }

  update(auth) {
    

    const observable = this.authService.updateCustomer(this.auth, this.userId);
    observable.subscribe(
      (response: any) => {
        console.log(response)
        alert("Customer Updated");
      },
      function (error) {
        console.log(error);
        alert("Something went wrong");
      });

    window.location.reload()

  }




  constructor(private authService: AuthService) { }

  ngOnInit(): void {


    let userEmail = sessionStorage.getItem('email');
    let userId = sessionStorage.getItem('userId');
    console.log(userEmail);
    const promise = this.authService.getCustomerById(userEmail);
    promise.subscribe((response) => {
      console.log(response);

      this.auths = response as SignupRequest[];
      this.disableFutureDate();

    })

  }
}
