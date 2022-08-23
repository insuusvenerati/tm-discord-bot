import { Catch, DiscordArgumentMetadata, DiscordExceptionFilter } from '@discord-nestjs/core';
import { ExceptionFilter, Logger } from '@nestjs/common';
import { Prisma } from '@prisma/client';

@Catch(Prisma.PrismaClientKnownRequestError)
export class PrismaExceptionFilter implements DiscordExceptionFilter {
  private logger = new Logger('PrismaException');
  async catch(
    exception: Prisma.PrismaClientKnownRequestError,
    metadata: DiscordArgumentMetadata<'interactionCreate'>,
  ): Promise<void> {
    const [interaction] = metadata.eventArgs;

    switch (exception.code) {
      case 'P2002':
        if (interaction.isCommand()) await interaction.reply('This trademark already exists');
        // this.logger.error({ code: exception.code, message: exception.message });
        break;

      default:
        break;
    }
  }
}

@Catch(Prisma.PrismaClientUnknownRequestError)
export class PrismaUnknownRequestExceptionFilter implements ExceptionFilter {
  private logger = new Logger('PrismaException');

  catch(exception: Prisma.PrismaClientUnknownRequestError): void {
    this.logger.error({ message: exception.message });
  }
}
