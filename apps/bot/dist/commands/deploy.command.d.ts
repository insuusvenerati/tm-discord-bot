import { DiscordCommand } from '@discord-nestjs/core';
import { CacheType, ChatInputCommandInteraction, ContextMenuCommandInteraction } from 'discord.js';
export declare class DeployCommand implements DiscordCommand {
    handler(interaction: ChatInputCommandInteraction<CacheType> | ContextMenuCommandInteraction<CacheType>): string;
}
