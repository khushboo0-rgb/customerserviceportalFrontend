import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

// const BASE_URL=environment.URL+"8087/users/";
const BASE_URL="https://wdhoxhkl5b.execute-api.ap-northeast-1.amazonaws.com/Dev-phase/";

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  getRequests(customerEmail)
  {
    return this.http.get(BASE_URL +customerEmail+"/getopen-requests")
    
  }
  getClosedRequests(customerEmail)
  {
    return this.http.get(BASE_URL+customerEmail)
  }
  createRequest(request: {requestDescription:string; requestTitle:string; requestCategory:string,requestStatus:string; customerEmail:string; }){
    console.log(request);
    return this.http.post(BASE_URL+"customerrequests",request);
  }
  updateRequest(bt, bid) {
    return this.http.put(BASE_URL+"customerrequests/"+ bt.requestId, bt);
  }
  searchRequestsByTitle(requestTitle) {
    return this.http.get(BASE_URL+"getRequestByTitle/" + requestTitle);
  }
  deleteRequest(requestId) {
    return this.http.delete(BASE_URL+"customerrequests/" + requestId );
  }
 
  constructor(public http: HttpClient) { }
}
