import { disableDebugTools } from "@angular/platform-browser";

export default class Request {
    requestId: number = 0;
    requestTitle: string = "";
    requestDescription:string ="";
    requestStatus: string = "pending";
    requestCategory: string = "";
    customerEmail:string="";
    requestDate = new Date();
    

}