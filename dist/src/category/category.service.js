"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryService = void 0;
const typeorm_1 = require("@nestjs/typeorm");
const common_1 = require("@nestjs/common");
const Category_1 = require("../typeorm/entities/Category");
const typeorm_2 = require("typeorm");
const Course_1 = require("../typeorm/entities/Course");
let CategoryService = class CategoryService {
    constructor(categoryRepo, coursesRepo) {
        this.categoryRepo = categoryRepo;
        this.coursesRepo = coursesRepo;
    }
    createCategory(category) {
        console.log(category);
        const newCategory = this.categoryRepo.create(category);
        return this.categoryRepo.save(newCategory);
    }
    fetchCategories() {
        const categories = this.categoryRepo.find();
        return categories;
    }
    async updateCategory(categoryId, updatedCategory) {
        const existingCategory = await this.categoryRepo.findOne({
            where: {
                id: categoryId,
            },
        });
        if (!existingCategory) {
            throw new common_1.NotFoundException(`Category with ID ${categoryId} not found`);
        }
        existingCategory.title = updatedCategory.title;
        existingCategory.image = updatedCategory.image;
        existingCategory.description = updatedCategory.description;
        return this.categoryRepo.save(existingCategory);
    }
    async deleteCategory(categoryId) {
        const existingCategory = await this.categoryRepo.findOne({
            where: {
                id: categoryId,
            },
        });
        if (!existingCategory) {
            throw new common_1.NotFoundException(`Category with ID ${categoryId} not found`);
        }
        await this.categoryRepo.remove(existingCategory);
        return { message: `Category with ID ${categoryId} has been deleted` };
    }
    async getSpecificCategory(categoryId) {
        const existingCategory = await this.categoryRepo.findOne({
            where: {
                id: categoryId,
            },
        });
        console.log("cat id", categoryId, " space ", existingCategory.image);
        if (!existingCategory) {
            throw new common_1.NotFoundException(`Category with ID ${categoryId} not found`);
        }
        let courses = await this.coursesRepo.find({
            where: {
                category: {
                    id: categoryId
                },
            },
            relations: ['tutorials'],
        });
        return { ...existingCategory, courses };
    }
};
CategoryService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(Category_1.Category)),
    __param(1, (0, typeorm_1.InjectRepository)(Course_1.Course)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], CategoryService);
exports.CategoryService = CategoryService;
//# sourceMappingURL=category.service.js.map