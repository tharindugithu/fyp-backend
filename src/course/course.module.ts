import { Module } from '@nestjs/common';
import { CourseService } from './course.service';
import { CourseController } from './course.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Course } from 'src/typeorm/entities/Course';

@Module({
  imports:[TypeOrmModule.forFeature([Course])],
  providers: [CourseService],
  controllers: [CourseController],
})
export class CourseModule {}
