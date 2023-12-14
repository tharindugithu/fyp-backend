import { CreateUserDto } from './../../dtos/CreateUser.dto';
import { CreateUserParams } from './../../../../utils/types';
import { Injectable } from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm'
import { User } from 'src/typeorm/entities/User';
import {Repository,ILike} from 'typeorm'
@Injectable()
export class UsersService {
    
    constructor(@InjectRepository(User) private userRepo:Repository<User>){}
    
    fetchUsers(){
      console.log("callinggggggggggg")
      const userList = this.userRepo.find()
      return userList
    }

    createUser(userDetails:CreateUserDto){
       const newUser = this.userRepo.create({
        ...userDetails,createdAt:new Date()
       })
       return this.userRepo.save(newUser)
    }
}
