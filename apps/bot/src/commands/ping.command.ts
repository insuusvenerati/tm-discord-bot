import { Command, DiscordCommand } from '@discord-nestjs/core';
import { Injectable } from '@nestjs/common';
import { ApplicationCommandType } from 'discord.js';

@Command({
  name: 'ping',
  description: 'Ping the bot server',
  type: ApplicationCommandType.ChatInput,
})
@Injectable()
export class PingCommand implements DiscordCommand {
  handler(): string {
    return 'Pong!';
  }
}
