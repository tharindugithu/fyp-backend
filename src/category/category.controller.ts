import { CreateCategoryDto } from './../dtos/CreateCategory.dto';
import { CategoryService } from './category.service';
import { Body, Controller, Post, Get, Put, Param, Delete } from '@nestjs/common';

@Controller('category')
export class CategoryController {
  constructor(public categoryService: CategoryService) {}
  @Post()
  async createCategory(@Body() categoryDto: CreateCategoryDto) {
    return this.categoryService.createCategory(categoryDto);
  }
  
  @Get()
  async getCategories(){
    return this.categoryService.fetchCategories()
  }

  @Put(':id') 
  async updateCategory(@Param('id') categoryId: number, @Body() updatedCategory: CreateCategoryDto) {
    return this.categoryService.updateCategory(categoryId, updatedCategory);
  }

  @Delete(':id') 
  async deleteCategory(@Param('id') categoryId: number) {
    return this.categoryService.deleteCategory(categoryId);
  }
  @Get('/get_category/:id')
  async getSpecificCategories(@Param('id') categoryId: number){
    console.log("get cat call")
    return this.categoryService.getSpecificCategory(categoryId)
  }
}
