"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("@nestjs/config");
exports.default = (0, config_1.registerAs)('discord', () => ({
    discord: {
        token: process.env.DISCORD_TOKEN,
        slashCommandsGuildId: process.env.SLASH_COMMANDS_GUILD_ID,
    },
}));
//# sourceMappingURL=discord.config.js.map