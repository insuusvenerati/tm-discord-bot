import { DiscordArgumentMetadata, DiscordExceptionFilter } from '@discord-nestjs/core';
import { ValidationError } from 'class-validator';
export declare class CommandValidationFilter implements DiscordExceptionFilter {
    catch(exceptionList: ValidationError[], metadata: DiscordArgumentMetadata<'interactionCreate'>): Promise<void>;
}
