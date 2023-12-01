import { Injectable } from '@nestjs/common';

@Injectable({})
export class AuthService{
   login(id:string){
     return "this is login "+id
   }
   signUp(){
    return "this is sign up"
   }
} 