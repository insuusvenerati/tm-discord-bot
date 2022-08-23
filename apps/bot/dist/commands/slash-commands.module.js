"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SlashCommandsModule = void 0;
const core_1 = require("@discord-nestjs/core");
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const deploy_command_1 = require("./deploy.command");
const ping_command_1 = require("./ping.command");
const new_command_1 = require("./trademark/new.command");
let SlashCommandsModule = class SlashCommandsModule {
};
SlashCommandsModule = __decorate([
    (0, common_1.Module)({
        imports: [core_1.DiscordModule.forFeature()],
        providers: [ping_command_1.PingCommand, new_command_1.NewTrademarkCommand, prisma_service_1.PrismaService, deploy_command_1.DeployCommand],
    })
], SlashCommandsModule);
exports.SlashCommandsModule = SlashCommandsModule;
//# sourceMappingURL=slash-commands.module.js.map