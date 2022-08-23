import { ChatInputCommandInteraction, PermissionFlagsBits } from 'discord.js';

export const isAdmin = (interaction: ChatInputCommandInteraction) =>
  interaction.memberPermissions.bitfield !== PermissionFlagsBits.Administrator;
