import { Command, DiscordCommand } from '@discord-nestjs/core';
import { Injectable } from '@nestjs/common';
import {
  CacheType,
  ChatInputCommandInteraction,
  ContextMenuCommandInteraction,
  PermissionFlagsBits,
} from 'discord.js';

@Command({
  name: 'deploy',
  description: 'Register new commands (do not use)',
})
@Injectable()
export class DeployCommand implements DiscordCommand {
  handler(
    interaction: ChatInputCommandInteraction<CacheType> | ContextMenuCommandInteraction<CacheType>,
  ): string {
    if (interaction.memberPermissions.bitfield !== PermissionFlagsBits.Administrator)
      return '!deploy';
  }
}
