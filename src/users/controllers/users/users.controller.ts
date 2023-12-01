import { CreateUserParams } from './../../../../utils/types';
import { UsersService } from './../../services/users/users.service';
import { CreateUserDto } from './../../dtos/CreateUser.dto';
import { Body, Controller, Get, Post } from '@nestjs/common';

@Controller('users')
export class UsersController {
  constructor(public userService: UsersService) {}
  @Get()
  async getUsers() {
   let ulist = this.userService.fetchUsers()
    return ulist
  }
  @Post()
  async createUser(@Body() createUserDto: CreateUserParams) {
    const { conformPassword, ...userDetails } = createUserDto;
    return this.userService.createUser(userDetails);
  }
}
