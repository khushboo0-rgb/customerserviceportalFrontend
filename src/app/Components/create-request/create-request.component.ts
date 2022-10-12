import { Component, OnInit } from '@angular/core';
import Request from 'src/app/entity/Request';
import { RequestService } from 'src/app/request.service';
import { requestCategories } from '../store/requestcategory-data-store ';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


import { Router } from '@angular/router';

@Component({
  selector: 'app-create-request',
  templateUrl: './create-request.component.html',
  styleUrls: ['./create-request.component.css']
})
export class CreateRequestComponent implements OnInit {
  public frmSignup: FormGroup;

  public requestCategories: any = requestCategories
  mindate: any;
  todayDate: Date = new Date();


  request: Request = new Request();
  requests: Request[] = [];
  minimumDate = new Date();
  
  createSignupForm(): FormGroup {
    return this.fb.group(
      {
        requestTitle: [
          null,
          Validators.compose([Validators.required])
        ],
       
    //     requestDescription: [null, Validators.compose([Validators.required])],
    //     requestCategory: [null, Validators.compose([Validators.required])
    //  ],
      },
     
    );
  }



  save() {
    let customerEmail = sessionStorage.getItem('email');
    console.log(customerEmail);
    this.request.customerEmail = sessionStorage.getItem('email');
    const observable = this.requestService.createRequest(this.request);
    observable.subscribe(
      (response: any) => {
        console.log(response);
        alert("Request Created");
        window.location.reload()
      },
      function (error) {
        console.log(error);
        alert("Something went wrong");
      });



  }

  disablePastDate() {

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

    this.mindate = year + "-" + month + "-" + todayDate;



  }
  close() {
    this.router.navigate(['updateRequest']);
  }
  constructor(public requestService: RequestService,private fb: FormBuilder, private router: Router) {
    this.frmSignup = this.createSignupForm();
   }

  ngOnInit(): void {

    let userEmail = sessionStorage.getItem('email');
    this.disablePastDate();
    const promise = this.requestService.getRequests(userEmail);
    promise.subscribe((response) => {
      console.log(response);
      this.requests = response as Request[];
    }
    )

  }

}

