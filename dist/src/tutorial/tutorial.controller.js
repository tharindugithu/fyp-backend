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
exports.TutorialController = void 0;
const common_1 = require("@nestjs/common");
const tutorial_service_1 = require("./tutorial.service");
const CreateTutorial_dto_1 = require("../dtos/CreateTutorial.dto");
let TutorialController = class TutorialController {
    constructor(tutorialService) {
        this.tutorialService = tutorialService;
    }
    async createTutorial(tutorialDto) {
        return this.tutorialService.createTutorial(tutorialDto);
    }
    async getTutorials() {
        return this.tutorialService.fetchTutorials();
    }
    async updateTutorial(tutorialId, updatededTutorial) {
        return this.tutorialService.updateTutorial(tutorialId, updatededTutorial);
    }
    async deleteTutorial(tutorialId) {
        return this.tutorialService.deleteTutorial(tutorialId);
    }
    async getSpecificTutorial(tutorialId) {
        console.log("get cat call");
        return this.tutorialService.getSpecificTutorial(tutorialId);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CreateTutorial_dto_1.CreateTutorialDto]),
    __metadata("design:returntype", Promise)
], TutorialController.prototype, "createTutorial", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TutorialController.prototype, "getTutorials", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, CreateTutorial_dto_1.CreateTutorialDto]),
    __metadata("design:returntype", Promise)
], TutorialController.prototype, "updateTutorial", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], TutorialController.prototype, "deleteTutorial", null);
__decorate([
    (0, common_1.Get)('get_tutorial/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], TutorialController.prototype, "getSpecificTutorial", null);
TutorialController = __decorate([
    (0, common_1.Controller)('tutorial'),
    __metadata("design:paramtypes", [tutorial_service_1.TutorialService])
], TutorialController);
exports.TutorialController = TutorialController;
//# sourceMappingURL=tutorial.controller.js.map