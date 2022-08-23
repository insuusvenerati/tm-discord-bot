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
exports.NewTrademarkCommand = void 0;
const common_1 = require("@discord-nestjs/common");
const core_1 = require("@discord-nestjs/core");
const common_2 = require("@nestjs/common");
const command_validation_filter_1 = require("../../exception/command-validation-filter");
const prisma_exception_filter_1 = require("../../exception/prisma-exception-filter");
const prisma_service_1 = require("../../prisma/prisma.service");
const new_dto_1 = require("./dto/new.dto");
let NewTrademarkCommand = class NewTrademarkCommand {
    constructor(prisma) {
        Object.defineProperty(this, "prisma", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: prisma
        });
    }
    async handler(dto, { interaction }) {
        const data = {
            name: dto.name.toLowerCase(),
            phrase: dto.phrase.toLowerCase(),
            user: interaction.user.id,
            username: interaction.user.username,
        };
        if (!dto.phrase.match('[a-zA-Z]'))
            await interaction.reply(`${dto.name} contains illegal characters`);
        await this.prisma.trademark.create({
            data,
        });
        return `Trademark with common name: ${dto.name} registered successfully to ${data.username}`;
    }
};
__decorate([
    __param(0, (0, core_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [new_dto_1.NewTrademarkDto, Object]),
    __metadata("design:returntype", Promise)
], NewTrademarkCommand.prototype, "handler", null);
NewTrademarkCommand = __decorate([
    (0, core_1.UseFilters)(command_validation_filter_1.CommandValidationFilter, prisma_exception_filter_1.PrismaExceptionFilter),
    (0, core_1.Command)({
        name: 'new',
        description: 'Register a new trademark phrase or word',
    }),
    (0, common_2.Injectable)(),
    (0, core_1.UsePipes)(common_1.TransformPipe),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], NewTrademarkCommand);
exports.NewTrademarkCommand = NewTrademarkCommand;
//# sourceMappingURL=new.command.js.map