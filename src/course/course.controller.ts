import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CourseService } from './course.service';
import { CreateCourseDto } from 'src/dtos/CreateCourse.dto';

@Controller('course')
export class CourseController {
    constructor(public courseService:CourseService){}
    @Post()
    async createCourse(@Body() caurseDto: CreateCourseDto) {
      return this.courseService.createCourse(caurseDto);
    }
    
    @Get()
    async getCourses(){
      return this.courseService.fetchCourse()
    }
  
    @Put(':id') 
    async updateCourse(@Param('id') courseId: number, @Body() updatedCourse: CreateCourseDto) {
      return this.courseService.updateCourse(courseId, updatedCourse);
    }
  
    @Delete(':id') 
    async deleteCourse(@Param('id') courseId: number) {
      return this.courseService.deleteCourse(courseId);
    }
    @Get('get_course/:id')
    async getSpecificCourse(@Param('id') courseId: number){
      console.log("get cat call")
      return this.courseService.getSpecificCourse(courseId)
    }
}
