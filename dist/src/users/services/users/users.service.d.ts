import { CreateUserDto } from './../../dtos/CreateUser.dto';
import { User } from 'src/typeorm/entities/User';
import { Repository } from 'typeorm';
export declare class UsersService {
    private userRepo;
    constructor(userRepo: Repository<User>);
    fetchUsers(): Promise<User[]>;
    createUser(userDetails: CreateUserDto): Promise<User>;
}
