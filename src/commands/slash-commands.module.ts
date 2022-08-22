import { DiscordModule } from '@discord-nestjs/core';
import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { DeployCommand } from './deploy.command';
import { PingCommand } from './ping.command';
import { NewTrademarkCommand } from './trademark/new.command';

@Module({
  imports: [DiscordModule.forFeature()],
  providers: [PingCommand, NewTrademarkCommand, PrismaService, DeployCommand],
})
export class SlashCommandsModule {}
