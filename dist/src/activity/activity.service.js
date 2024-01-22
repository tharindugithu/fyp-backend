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
exports.ActivityService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const Activity_1 = require("../typeorm/entities/Activity");
const Tutorial_1 = require("../typeorm/entities/Tutorial");
let ActivityService = class ActivityService {
    constructor(activityRepo, tutorialRepo) {
        this.activityRepo = activityRepo;
        this.tutorialRepo = tutorialRepo;
    }
    async createActivity(createActivityDto) {
        const { title, answers, tutorial } = createActivityDto;
        const newActivity = {
            answers,
            title,
            tutorial: { id: tutorial }
        };
        const createActivity = this.activityRepo.create(newActivity);
        return this.activityRepo.save(createActivity);
    }
    async getAllActivities() {
        return await this.activityRepo.find({ relations: ['tutorial'] });
    }
    async getActivityById(id) {
        const activity = await this.activityRepo.findOne({
            where: {
                id
            }, relations: ['tutorial']
        });
        if (!activity) {
            throw new common_1.NotFoundException(`Activity with ID ${id} not found`);
        }
        return activity;
    }
    async updateActivity(id, updateActivityDto) {
        const activity = await this.getActivityById(id);
        activity.title = updateActivityDto.title;
        activity.answers = updateActivityDto.answers;
        activity.tutorial = await this.tutorialRepo.findOne({
            where: {
                id: updateActivityDto.tutorial
            }
        });
        return await this.activityRepo.save(activity);
    }
    async deleteActivity(id) {
        const activity = await this.getActivityById(id);
        await this.activityRepo.remove(activity);
    }
};
ActivityService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(Activity_1.Activity)),
    __param(1, (0, typeorm_1.InjectRepository)(Tutorial_1.Tutorial)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], ActivityService);
exports.ActivityService = ActivityService;
//# sourceMappingURL=activity.service.js.map