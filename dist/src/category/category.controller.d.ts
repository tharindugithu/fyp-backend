import { CreateCategoryDto } from './../dtos/CreateCategory.dto';
import { CategoryService } from './category.service';
export declare class CategoryController {
    categoryService: CategoryService;
    constructor(categoryService: CategoryService);
    createCategory(categoryDto: CreateCategoryDto): Promise<import("../typeorm/entities/Category").Category>;
    getCategories(): Promise<import("../typeorm/entities/Category").Category[]>;
    updateCategory(categoryId: number, updatedCategory: CreateCategoryDto): Promise<import("../typeorm/entities/Category").Category>;
    deleteCategory(categoryId: number): Promise<{
        message: string;
    }>;
    getSpecificCategories(categoryId: number): Promise<{
        courses: import("../typeorm/entities/Course").Course[];
        id: number;
        title: string;
        image: string;
        description: string;
        createdAt: Date;
    }>;
}
