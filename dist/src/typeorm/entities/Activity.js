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
exports.Activity = void 0;
const typeorm_1 = require("typeorm");
const Tutorial_1 = require("./Tutorial");
let Activity = class Activity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'bigint' }),
    __metadata("design:type", Number)
], Activity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Activity.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)('simple-array'),
    __metadata("design:type", Array)
], Activity.prototype, "answers", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Tutorial_1.Tutorial, tutorial => tutorial.activities),
    __metadata("design:type", Tutorial_1.Tutorial)
], Activity.prototype, "tutorial", void 0);
Activity = __decorate([
    (0, typeorm_1.Entity)({ name: 'activities' })
], Activity);
exports.Activity = Activity;
//# sourceMappingURL=Activity.js.map