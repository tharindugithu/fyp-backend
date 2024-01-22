import { Activity } from './typeorm/entities/Activity';
import { Tutorial } from './typeorm/entities/Tutorial';
import { Course } from './typeorm/entities/Course';
import { Category } from './typeorm/entities/Category';
import { User } from './typeorm/entities/User';
import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { CategoryModule } from './category/category.module';
import { TutorialModule } from './tutorial/tutorial.module';
import { CourseModule } from './course/course.module';
import { ActivityModule } from './activity/activity.module';


@Module({
 imports:[AuthModule,TypeOrmModule.forRoot({
    type:'mysql',
    host:'localhost',
    port:3306,
    username:'root',
    password:'1234',
    database:'nestjstest',
    entities:[User,Category,Course,Tutorial,Activity],
    synchronize:true,
    logging: true,
 }), UsersModule, CategoryModule, TutorialModule, CourseModule, ActivityModule],
})
export class AppModule {}
 