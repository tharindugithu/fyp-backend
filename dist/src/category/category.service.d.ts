import { CreateCategoryDto } from './../dtos/CreateCategory.dto';
import { Category } from '../typeorm/entities/Category';
import { Repository } from 'typeorm';
import { Course } from '../typeorm/entities/Course';
export declare class CategoryService {
    private categoryRepo;
    private coursesRepo;
    constructor(categoryRepo: Repository<Category>, coursesRepo: Repository<Course>);
    createCategory(category: CreateCategoryDto): Promise<Category>;
    fetchCategories(): Promise<Category[]>;
    updateCategory(categoryId: any, updatedCategory: CreateCategoryDto): Promise<Category>;
    deleteCategory(categoryId: any): Promise<{
        message: string;
    }>;
    getSpecificCategory(categoryId: any): Promise<{
        courses: Course[];
        id: number;
        title: string;
        image: string;
        description: string;
        createdAt: Date;
    }>;
}
