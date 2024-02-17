import { CategoryService } from './category.service';
import { CategoryController } from './category.controller';
import { Category } from '../typeorm/entities/Category'
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { Course } from 'src/typeorm/entities/Course';

@Module({
    imports:[TypeOrmModule.forFeature([Category,Course])],
    controllers:[CategoryController],
    providers:[CategoryService]
})
export class CategoryModule {}
