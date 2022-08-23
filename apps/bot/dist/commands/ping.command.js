"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PingCommand = void 0;
const core_1 = require("@discord-nestjs/core");
const common_1 = require("@nestjs/common");
const discord_js_1 = require("discord.js");
let PingCommand = class PingCommand {
    handler() {
        return 'Pong!';
    }
};
PingCommand = __decorate([
    (0, core_1.Command)({
        name: 'ping',
        description: 'Ping the bot server',
        type: discord_js_1.ApplicationCommandType.ChatInput,
    }),
    (0, common_1.Injectable)()
], PingCommand);
exports.PingCommand = PingCommand;
//# sourceMappingURL=ping.command.js.map