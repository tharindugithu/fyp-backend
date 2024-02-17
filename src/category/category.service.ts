import { CreateCategoryDto } from './../dtos/CreateCategory.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable, NotFoundException } from '@nestjs/common';
import { Category } from '../typeorm/entities/Category';
import { Repository } from 'typeorm';
import { Course } from '../typeorm/entities/Course';
@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category) private categoryRepo: Repository<Category>,
    @InjectRepository(Course) private coursesRepo:Repository<Course>
  ) {}

  createCategory(category: CreateCategoryDto) {
    console.log(category);
    const newCategory = this.categoryRepo.create(category);
    return this.categoryRepo.save(newCategory);
  }

  fetchCategories() {
    const categories = this.categoryRepo.find();
    return categories;
  }

  async updateCategory(categoryId: any, updatedCategory: CreateCategoryDto) {
    const existingCategory = await this.categoryRepo.findOne({
      where: {
        id: categoryId,
      },
    });

    if (!existingCategory) {
      throw new NotFoundException(`Category with ID ${categoryId} not found`);
    }

    existingCategory.title = updatedCategory.title;
    existingCategory.image = updatedCategory.image;
    existingCategory.description = updatedCategory.description;

    return this.categoryRepo.save(existingCategory);
  }

  async deleteCategory(categoryId: any) {
    const existingCategory = await this.categoryRepo.findOne({
      where: {
        id: categoryId,
      },
    });

    if (!existingCategory) {
      throw new NotFoundException(`Category with ID ${categoryId} not found`);
    }

    await this.categoryRepo.remove(existingCategory);

    return { message: `Category with ID ${categoryId} has been deleted` };
  }

  async getSpecificCategory(categoryId: any) {
    const existingCategory = await this.categoryRepo.findOne({
      where: {
        id: categoryId,
      },
    });
    console.log("cat id",categoryId," space ",existingCategory.image)
    if (!existingCategory) {
      throw new NotFoundException(`Category with ID ${categoryId} not found`);
    }
    let courses = await this.coursesRepo.find({
      where: {
          category:{
            id:categoryId
          },
      },
      relations: ['tutorials'], // Add any other relations if needed
  });
  
    return {...existingCategory,courses};
  }
}
