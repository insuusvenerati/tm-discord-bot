import { Client, Message } from 'discord.js';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class BotGateway {
    private readonly client;
    private prisma;
    private logger;
    constructor(client: Client, prisma: PrismaService);
    onReady(): void;
    onMessage(message: Message): Promise<void>;
}
