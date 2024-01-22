import { CreateCourseDto } from 'src/dtos/CreateCourse.dto';
import { Course } from 'src/typeorm/entities/Course';
import { Repository } from 'typeorm';
export declare class CourseService {
    private courseRepo;
    constructor(courseRepo: Repository<Course>);
    getSpecificCourse(courseId: number): Promise<Course | undefined>;
    deleteCourse(courseId: number): Promise<void>;
    updateCourse(courseId: number, updatedCourse: CreateCourseDto): Promise<Course | undefined>;
    fetchCourse(): Promise<Course[]>;
    createCourse(courseDto: CreateCourseDto): Promise<Course>;
}
