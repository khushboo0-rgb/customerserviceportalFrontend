import LogIn from "src/app/entity/Login";

export default class AuthResponse{
    message:string="";
    role:string="";
    statusCode:number=0;
    user:LogIn=new LogIn();
}