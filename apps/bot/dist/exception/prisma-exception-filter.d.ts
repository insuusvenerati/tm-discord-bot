import { DiscordArgumentMetadata, DiscordExceptionFilter } from '@discord-nestjs/core';
import { ExceptionFilter } from '@nestjs/common';
import { Prisma } from '@prisma/client';
export declare class PrismaExceptionFilter implements DiscordExceptionFilter {
    private logger;
    catch(exception: Prisma.PrismaClientKnownRequestError, metadata: DiscordArgumentMetadata<'interactionCreate'>): Promise<void>;
}
export declare class PrismaUnknownRequestExceptionFilter implements ExceptionFilter {
    private logger;
    catch(exception: Prisma.PrismaClientUnknownRequestError): void;
}
