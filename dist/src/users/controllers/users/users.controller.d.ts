import { CreateUserParams } from './../../../../utils/types';
import { UsersService } from './../../services/users/users.service';
export declare class UsersController {
    userService: UsersService;
    constructor(userService: UsersService);
    getUsers(): Promise<import("../../../typeorm/entities/User").User[]>;
    createUser(createUserDto: CreateUserParams): Promise<import("../../../typeorm/entities/User").User>;
}
