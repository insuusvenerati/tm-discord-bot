import { TransformPipe } from '@discord-nestjs/common';
import {
  Command,
  DiscordTransformedCommand,
  Payload,
  TransformedCommandExecutionContext,
  UseFilters,
  UsePipes,
} from '@discord-nestjs/core';
import { Injectable } from '@nestjs/common';
import { EmbedBuilder } from 'discord.js';
import { CommandValidationFilter } from 'src/exception/command-validation-filter';
import {
  PrismaExceptionFilter,
  PrismaUnknownRequestExceptionFilter,
} from 'src/exception/prisma-exception-filter';
import { PrismaService } from 'src/prisma/prisma.service';
import { NewTrademarkDto } from './dto/new.dto';

@UseFilters(CommandValidationFilter, PrismaExceptionFilter, PrismaUnknownRequestExceptionFilter)
@Command({
  name: 'new',
  description: 'Register a new trademark phrase or word',
})
@Injectable()
@UsePipes(TransformPipe)
export class NewTrademarkCommand implements DiscordTransformedCommand<NewTrademarkDto> {
  constructor(private prisma: PrismaService) {}

  async handler(
    @Payload() dto: NewTrademarkDto,
    { interaction }: TransformedCommandExecutionContext,
  ) {
    const embeds = new EmbedBuilder()
      .setColor('Green')
      .setTitle(`Trademark common name: ${dto.name}`)
      .setAuthor({ name: interaction.user.username, iconURL: interaction.user.avatarURL() })
      .setDescription(`Trademarked phrase: ${dto.phrase}`)
      .setTimestamp();

    if (!dto.phrase.match('[a-zA-Z]'))
      await interaction.reply(`${dto.name} contains illegal characters`);

    await this.prisma.trademark.create({
      data: {
        name: dto.name,
        phrase: dto.phrase,
        user: {
          connectOrCreate: {
            create: {
              username: interaction.user.username,
              id: interaction.user.id,
            },
            where: {
              id: interaction.user.id,
            },
          },
        },
      },
    });

    if (interaction.isCommand()) await interaction.reply({ embeds: [embeds] });
  }
}
