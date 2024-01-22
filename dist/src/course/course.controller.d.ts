import { CourseService } from './course.service';
import { CreateCourseDto } from 'src/dtos/CreateCourse.dto';
export declare class CourseController {
    courseService: CourseService;
    constructor(courseService: CourseService);
    createCourse(caurseDto: CreateCourseDto): Promise<import("../typeorm/entities/Course").Course>;
    getCourses(): Promise<import("../typeorm/entities/Course").Course[]>;
    updateCourse(courseId: number, updatedCourse: CreateCourseDto): Promise<import("../typeorm/entities/Course").Course>;
    deleteCourse(courseId: number): Promise<void>;
    getSpecificCourse(courseId: number): Promise<import("../typeorm/entities/Course").Course>;
}
