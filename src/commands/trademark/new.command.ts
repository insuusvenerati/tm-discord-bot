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
import { CommandValidationFilter } from 'src/exception/command-validation-filter';
import { PrismaExceptionFilter } from 'src/exception/prisma-exception-filter';
import { PrismaService } from 'src/prisma/prisma.service';
import { NewTrademarkDto } from './dto/new.dto';

@UseFilters(CommandValidationFilter, PrismaExceptionFilter)
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
  ): Promise<string> {
    const data = {
      name: dto.name.toLowerCase(),
      phrase: dto.phrase.toLowerCase(),
      user: interaction.user.id,
      username: interaction.user.username,
    };

    if (!dto.phrase.match('[a-zA-Z]'))
      await interaction.reply(`${dto.name} contains illegal characters`);

    await this.prisma.trademark.create({
      data,
    });

    return `Trademark with common name: ${dto.name} registered successfully to ${data.username}`;
  }
}
