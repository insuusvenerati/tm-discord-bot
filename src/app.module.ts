import { DiscordModule } from '@discord-nestjs/core';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigType } from '@nestjs/config';
import { GatewayIntentBits } from 'discord.js';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SlashCommandsModule } from './commands/slash-commands.module';
import { PrismaService } from './prisma/prisma.service';
import appConfig from './config/app.config';
import databaseConfig from './config/database.config';
import discordConfig from './config/discord.config';
import joi from './config/joi';
import { BotGateway } from './gateway/bot-gateway.gateway';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [discordConfig, appConfig, databaseConfig],
      validationSchema: joi(),
      isGlobal: true,
    }),
    DiscordModule.forRootAsync({
      imports: [ConfigModule],
      inject: [discordConfig.KEY],
      useFactory: (config: ConfigType<typeof discordConfig>) => ({
        token: config.discord.token,
        discordClientOptions: {
          intents: [
            GatewayIntentBits.GuildMessages,
            GatewayIntentBits.Guilds,
            GatewayIntentBits.MessageContent,
          ],
        },
        registerCommandOptions: [
          {
            forGuild: config.discord.slashCommandsGuildId,
            allowFactory: (message) => message.author.bot && message.content === '!deploy',
          },
        ],
        autoLogin: true,
        failOnLogin: true,
      }),
    }),
    SlashCommandsModule,
  ],
  controllers: [AppController],
  providers: [AppService, PrismaService, BotGateway],
})
export class AppModule {}
