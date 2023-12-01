import { AuthService } from './auth.service';
import { Controller, Post,Body } from "@nestjs/common";

@Controller('auth')

export class AuthController{
 constructor(private authService:AuthService){}
  
 @Post('signup')
 singUp(@Body('id') id:string){
  return this.authService.login(id)
  }
 @Post('signin')
 signin(){
   return this.authService.signUp() 
 }
}