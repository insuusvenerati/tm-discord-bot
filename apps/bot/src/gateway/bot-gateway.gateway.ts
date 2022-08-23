import { InjectDiscordClient, On, Once } from '@discord-nestjs/core';
import { Injectable, Logger } from '@nestjs/common';
import { Client, Message } from 'discord.js';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class BotGateway {
  private logger = new Logger(BotGateway.name);
  constructor(
    @InjectDiscordClient() private readonly client: Client,
    private prisma: PrismaService,
  ) {}

  @Once('ready')
  onReady() {
    this.logger.log(`Bot ${this.client.user.tag} was started!`);
  }

  @On('messageCreate')
  async onMessage(message: Message) {
    const messages = await this.prisma.trademark.findFirst({
      where: {
        phrase: {
          search: message.content.toLowerCase().split(' ').join(' | '),
        },
      },
      select: {
        name: true,
        username: true,
        user: true,
      },
    });
    if (!message.author.bot && messages && messages.name) {
      if (message.author.id !== messages.user) {
        await message.delete();
        await message.channel.send('You cannot use that trademarked phrase 🦉');
      }
    }
    // this.logger.log(message.content);
    // if (!message.author.bot && messages) await message.reply('This phrase is trademarked');
  }
}
