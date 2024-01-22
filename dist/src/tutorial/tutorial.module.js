"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TutorialModule = void 0;
const common_1 = require("@nestjs/common");
const tutorial_service_1 = require("./tutorial.service");
const tutorial_controller_1 = require("./tutorial.controller");
const Tutorial_1 = require("../typeorm/entities/Tutorial");
const typeorm_1 = require("@nestjs/typeorm");
let TutorialModule = class TutorialModule {
};
TutorialModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([Tutorial_1.Tutorial])],
        providers: [tutorial_service_1.TutorialService],
        controllers: [tutorial_controller_1.TutorialController]
    })
], TutorialModule);
exports.TutorialModule = TutorialModule;
//# sourceMappingURL=tutorial.module.js.map