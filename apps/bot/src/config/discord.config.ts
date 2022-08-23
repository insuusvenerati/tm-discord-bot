import { registerAs } from '@nestjs/config';

export default registerAs('discord', () => ({
  discord: {
    token: process.env.DISCORD_TOKEN,
    slashCommandsGuildId: process.env.SLASH_COMMANDS_GUILD_ID,
  },
}));
