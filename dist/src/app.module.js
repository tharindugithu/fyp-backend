"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const Activity_1 = require("./typeorm/entities/Activity");
const Tutorial_1 = require("./typeorm/entities/Tutorial");
const Course_1 = require("./typeorm/entities/Course");
const Category_1 = require("./typeorm/entities/Category");
const User_1 = require("./typeorm/entities/User");
const common_1 = require("@nestjs/common");
const auth_module_1 = require("./auth/auth.module");
const typeorm_1 = require("@nestjs/typeorm");
const users_module_1 = require("./users/users.module");
const category_module_1 = require("./category/category.module");
const tutorial_module_1 = require("./tutorial/tutorial.module");
const course_module_1 = require("./course/course.module");
const activity_module_1 = require("./activity/activity.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [auth_module_1.AuthModule, typeorm_1.TypeOrmModule.forRoot({
                type: 'mysql',
                host: 'localhost',
                port: 3306,
                username: 'root',
                password: '1234',
                database: 'nestjstest',
                entities: [User_1.User, Category_1.Category, Course_1.Course, Tutorial_1.Tutorial, Activity_1.Activity],
                synchronize: true,
                logging: true,
            }), users_module_1.UsersModule, category_module_1.CategoryModule, tutorial_module_1.TutorialModule, course_module_1.CourseModule, activity_module_1.ActivityModule],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map