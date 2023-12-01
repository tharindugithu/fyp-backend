import { User } from './typeorm/entities/User';
import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { BookmarkModule } from './bookmark/bookmark.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';


@Module({
 imports:[AuthModule, BookmarkModule,TypeOrmModule.forRoot({
    type:'mysql',
    host:'localhost',
    port:3306,
    username:'root',
    password:'1234',
    database:'nestjstest',
    entities:[User],
    synchronize:true
 }), UsersModule],
})
export class AppModule {}
 