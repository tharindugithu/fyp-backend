import { CreateCategoryDto } from './../dtos/CreateCategory.dto';
import { Category } from '../typeorm/entities/Category';
import { Repository } from 'typeorm';
export declare class CategoryService {
    private categoryRepo;
    constructor(categoryRepo: Repository<Category>);
    createCategory(category: CreateCategoryDto): Promise<Category>;
}
