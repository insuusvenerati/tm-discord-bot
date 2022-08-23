"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const core_1 = require("@discord-nestjs/core");
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const discord_js_1 = require("discord.js");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const slash_commands_module_1 = require("./commands/slash-commands.module");
const prisma_service_1 = require("./prisma/prisma.service");
const app_config_1 = require("./config/app.config");
const database_config_1 = require("./config/database.config");
const discord_config_1 = require("./config/discord.config");
const joi_1 = require("./config/joi");
const bot_gateway_gateway_1 = require("./gateway/bot-gateway.gateway");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                load: [discord_config_1.default, app_config_1.default, database_config_1.default],
                validationSchema: (0, joi_1.default)(),
                isGlobal: true,
            }),
            core_1.DiscordModule.forRootAsync({
                imports: [config_1.ConfigModule],
                inject: [discord_config_1.default.KEY],
                useFactory: (config) => ({
                    token: config.discord.token,
                    discordClientOptions: {
                        intents: [
                            discord_js_1.GatewayIntentBits.GuildMessages,
                            discord_js_1.GatewayIntentBits.Guilds,
                            discord_js_1.GatewayIntentBits.MessageContent,
                        ],
                    },
                    registerCommandOptions: [
                        {
                            forGuild: config.discord.slashCommandsGuildId,
                            allowFactory: (message) => message.author.bot && message.content === '!deploy',
                        },
                    ],
                    autoLogin: true,
                    failOnLogin: true,
                }),
            }),
            slash_commands_module_1.SlashCommandsModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService, prisma_service_1.PrismaService, bot_gateway_gateway_1.BotGateway],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map