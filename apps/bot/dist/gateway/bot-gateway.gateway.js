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
var BotGateway_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.BotGateway = void 0;
const core_1 = require("@discord-nestjs/core");
const common_1 = require("@nestjs/common");
const discord_js_1 = require("discord.js");
const prisma_service_1 = require("../prisma/prisma.service");
let BotGateway = BotGateway_1 = class BotGateway {
    constructor(client, prisma) {
        Object.defineProperty(this, "client", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: client
        });
        Object.defineProperty(this, "prisma", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: prisma
        });
        Object.defineProperty(this, "logger", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: new common_1.Logger(BotGateway_1.name)
        });
    }
    onReady() {
        this.logger.log(`Bot ${this.client.user.tag} was started!`);
    }
    async onMessage(message) {
        const messages = await this.prisma.trademark.findFirst({
            where: {
                phrase: {
                    search: message.content.toLowerCase().split(' ').join(' | '),
                },
            },
            select: {
                name: true,
                username: true,
                user: true,
            },
        });
        if (!message.author.bot && messages && messages.name) {
            if (message.author.id !== messages.user) {
                await message.delete();
                await message.channel.send('You cannot use that trademarked phrase 🦉');
            }
        }
    }
};
__decorate([
    (0, core_1.Once)('ready'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], BotGateway.prototype, "onReady", null);
__decorate([
    (0, core_1.On)('messageCreate'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [discord_js_1.Message]),
    __metadata("design:returntype", Promise)
], BotGateway.prototype, "onMessage", null);
BotGateway = BotGateway_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, core_1.InjectDiscordClient)()),
    __metadata("design:paramtypes", [discord_js_1.Client,
        prisma_service_1.PrismaService])
], BotGateway);
exports.BotGateway = BotGateway;
//# sourceMappingURL=bot-gateway.gateway.js.map