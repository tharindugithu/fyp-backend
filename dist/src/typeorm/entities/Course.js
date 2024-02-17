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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Course = void 0;
const typeorm_1 = require("typeorm");
const Category_1 = require("./Category");
const Tutorial_1 = require("./Tutorial");
let Course = class Course {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'bigint' }),
    __metadata("design:type", Number)
], Course.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Course.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Course.prototype, "image", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 10000 }),
    __metadata("design:type", String)
], Course.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Category_1.Category, category => category.courses),
    __metadata("design:type", Category_1.Category)
], Course.prototype, "category", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Tutorial_1.Tutorial, tutorial => tutorial.course),
    __metadata("design:type", Array)
], Course.prototype, "tutorials", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' }),
    __metadata("design:type", Date)
], Course.prototype, "createdAt", void 0);
Course = __decorate([
    (0, typeorm_1.Entity)({ name: 'courses' })
], Course);
exports.Course = Course;
//# sourceMappingURL=Course.js.map