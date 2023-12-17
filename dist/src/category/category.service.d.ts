import { CreateCategoryDto } from './../dtos/CreateCategory.dto';
import { Category } from '../typeorm/entities/Category';
import { Repository } from 'typeorm';
export declare class CategoryService {
    private categoryRepo;
    constructor(categoryRepo: Repository<Category>);
    createCategory(category: CreateCategoryDto): Promise<Category>;
    fetchCategories(): Promise<Category[]>;
    updateCategory(categoryId: any, updatedCategory: CreateCategoryDto): Promise<Category>;
    deleteCategory(categoryId: any): Promise<{
        message: string;
    }>;
    getSpecificCategory(categoryId: any): Promise<Category>;
}
