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
exports.NewTrademarkDto = void 0;
const core_1 = require("@discord-nestjs/core");
class NewTrademarkDto {
    constructor() {
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "phrase", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
    }
}
__decorate([
    (0, core_1.Param)({ description: 'Common name for your trademark', required: true }),
    __metadata("design:type", String)
], NewTrademarkDto.prototype, "name", void 0);
__decorate([
    (0, core_1.Param)({ description: 'Word or phrase to trademark', required: true }),
    __metadata("design:type", String)
], NewTrademarkDto.prototype, "phrase", void 0);
exports.NewTrademarkDto = NewTrademarkDto;
//# sourceMappingURL=new.dto.js.map