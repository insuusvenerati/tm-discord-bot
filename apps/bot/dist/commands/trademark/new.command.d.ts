import { DiscordTransformedCommand, TransformedCommandExecutionContext } from '@discord-nestjs/core';
import { PrismaService } from 'src/prisma/prisma.service';
import { NewTrademarkDto } from './dto/new.dto';
export declare class NewTrademarkCommand implements DiscordTransformedCommand<NewTrademarkDto> {
    private prisma;
    constructor(prisma: PrismaService);
    handler(dto: NewTrademarkDto, { interaction }: TransformedCommandExecutionContext): Promise<string>;
}
