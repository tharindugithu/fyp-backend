import { CategoryService } from './category.service';
import { CategoryController } from './category.controller';
import { Category } from '../typeorm/entities/Category'
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';

@Module({
    imports:[TypeOrmModule.forFeature([Category])],
    controllers:[CategoryController],
    providers:[CategoryService]
})
export class CategoryModule {}
