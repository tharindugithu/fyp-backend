import { CreateCategoryDto } from './../dtos/CreateCategory.dto';
import { CategoryService } from './category.service';
export declare class CategoryController {
    categoryService: CategoryService;
    constructor(categoryService: CategoryService);
    createCategory(categoryDto: CreateCategoryDto): Promise<import("../typeorm/entities/Category").Category>;
}
