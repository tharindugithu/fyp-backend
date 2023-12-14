import { CreateCategoryDto } from './../dtos/CreateCategory.dto';
import { CategoryService } from './category.service';
import { Body, Controller, Post } from '@nestjs/common';

@Controller('category')
export class CategoryController {
  constructor(public categoryService: CategoryService) {}
  @Post()
  async createCategory(@Body() categoryDto: CreateCategoryDto) {
    return this.categoryService.createCategory(categoryDto);
  }
}
