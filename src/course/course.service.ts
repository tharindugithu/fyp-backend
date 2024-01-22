import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateCourseDto } from 'src/dtos/CreateCourse.dto';
import { Course } from 'src/typeorm/entities/Course';
import { DeepPartial, Repository } from 'typeorm';

@Injectable()
export class CourseService {

    constructor(@InjectRepository(Course) private courseRepo:Repository<Course>,){}

    async getSpecificCourse(courseId: number): Promise<Course | undefined> {
        return this.courseRepo.findOne({
            where: {
              id: courseId,
            },
            relations: ['category', 'tutorials']
          },);
    }

    async deleteCourse(courseId: number): Promise<void> {
        await this.courseRepo.delete(courseId);
    }

    async updateCourse(courseId: number, updatedCourse: CreateCourseDto): Promise<Course | undefined> {
        const existingCourse = await this.courseRepo.findOne({
            where: {
                id: courseId,
            },
        });
    
        if (!existingCourse) {
            // Course with the given ID not found
            return undefined;
        }
    
        // Update properties with non-null values from updatedCourse
        Object.assign(existingCourse, updatedCourse);
    
        // Update the category separately if needed
        // if (updatedCourse.category) {
        //     existingCourse.category.id = updatedCourse.category;
        // }
    
        // Save the changes and return the updated course
        return this.courseRepo.save(existingCourse);
    }
    
    async fetchCourse(): Promise<Course[]> {
        return this.courseRepo.find({ relations: ['category'] });
    }

    createCourse(courseDto: CreateCourseDto) {
       
        const newCourse: DeepPartial<Course> = {
            title: courseDto.title,
            image: courseDto.image,
            description: courseDto.description,
            category: { id: courseDto.category }, 
        };
    
        const createdCourse = this.courseRepo.create(newCourse);
        return this.courseRepo.save(createdCourse);
    }
    
}
