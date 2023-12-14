import { CreateCategoryDto } from './../dtos/CreateCategory.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { Category } from '../typeorm/entities/Category'
import { Repository } from 'typeorm';
@Injectable()
export class CategoryService {
    constructor(@InjectRepository(Category) private categoryRepo:Repository<Category>){}

    createCategory(category:CreateCategoryDto){
        console.log(category)
        const newCategory = this.categoryRepo.create(category)
        return this.categoryRepo.save(newCategory)
    }
}
