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
exports.CourseService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const Course_1 = require("../typeorm/entities/Course");
const typeorm_2 = require("typeorm");
let CourseService = class CourseService {
    constructor(courseRepo) {
        this.courseRepo = courseRepo;
    }
    async getSpecificCourse(courseId) {
        return this.courseRepo.findOne({
            where: {
                id: courseId,
            },
            relations: ['category', 'tutorials']
        });
    }
    async deleteCourse(courseId) {
        await this.courseRepo.delete(courseId);
    }
    async updateCourse(courseId, updatedCourse) {
        const existingCourse = await this.courseRepo.findOne({
            where: {
                id: courseId,
            },
        });
        if (!existingCourse) {
            return undefined;
        }
        Object.assign(existingCourse, updatedCourse);
        return this.courseRepo.save(existingCourse);
    }
    async fetchCourse() {
        return this.courseRepo.find({ relations: ['category'] });
    }
    createCourse(courseDto) {
        const newCourse = {
            title: courseDto.title,
            image: courseDto.image,
            description: courseDto.description,
            category: { id: courseDto.category },
        };
        const createdCourse = this.courseRepo.create(newCourse);
        return this.courseRepo.save(createdCourse);
    }
};
CourseService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(Course_1.Course)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], CourseService);
exports.CourseService = CourseService;
//# sourceMappingURL=course.service.js.map