import { Component, OnInit } from '@angular/core';
import Request from 'src/app/entity/Request';
import { Router } from '@angular/router';
import { requestCategories } from '../store/requestcategory-data-store ';
import { RequestService } from 'src/app/request.service';
import { AuthService } from 'src/app/auth.service';
import {
  CanActivate,
  RouterStateSnapshot
} from '@angular/router';

@Component({
  selector: 'app-update-request',
  templateUrl: './update-request.component.html',
  styleUrls: ['./update-request.component.css']
})
export class UpdateRequestComponent implements OnInit {
  requests: Request[] = [];
  request: Request = new Request();
  requestId: number = 0;

  statusOption: string[] = ['pending', 'closed'];
  statusOption2: string[] = ['reopen', 'closed'];

  // 2 lists 

  public requestCategories: any = requestCategories

  delete(j) {

    const observable = this.requestService.
      deleteRequest(j);
    observable.subscribe((response: any) => {
      console.log(response);
      this.requests.splice(j, 1);
      alert("request deleted successfully");
    });

    window.location.reload()

  }

  updateRequest(bt, j) {
    // this.router.navigate(['home']);
    this.requestId = bt.requestId;
    console.log(bt.requestId);
    this.request.requestId = bt.requestId;
    this.request.requestTitle = bt.requestTitle;
    this.request.requestCategory = bt.requestCategory;
    this.request.requestStatus = bt.requestStatus;
    this.request.requestDescription = bt.requestDescription;

  }

  update(request) {

    console.log(request);
    const observable = this.requestService.updateRequest(this.request, this.requestId);
    observable.subscribe(
      (response: any) => {
        console.log(response)
        alert("Request Updated");
      },
      function (error) {
        console.log(error);
        alert("Something went wrong");
      });

    window.location.reload()

  }




  constructor(public requestService: RequestService, private router: Router) { }

  ngOnInit(): void {


    let customerEmail = sessionStorage.getItem('email');
    const promise = this.requestService.getRequests(customerEmail);

    promise.subscribe((response) => {
      console.log(response);
      this.requests = response as Request[];

    })

  }
}
