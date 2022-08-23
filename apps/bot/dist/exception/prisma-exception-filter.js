"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrismaUnknownRequestExceptionFilter = exports.PrismaExceptionFilter = void 0;
const core_1 = require("@discord-nestjs/core");
const common_1 = require("@nestjs/common");
const client_1 = require("@prisma/client");
let PrismaExceptionFilter = class PrismaExceptionFilter {
    constructor() {
        Object.defineProperty(this, "logger", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: new common_1.Logger('PrismaException')
        });
    }
    async catch(exception, metadata) {
        const [interaction] = metadata.eventArgs;
        switch (exception.code) {
            case 'P2002':
                if (interaction.isCommand())
                    await interaction.reply('This trademark already exists');
                break;
            default:
                break;
        }
    }
};
PrismaExceptionFilter = __decorate([
    (0, core_1.Catch)(client_1.Prisma.PrismaClientKnownRequestError)
], PrismaExceptionFilter);
exports.PrismaExceptionFilter = PrismaExceptionFilter;
let PrismaUnknownRequestExceptionFilter = class PrismaUnknownRequestExceptionFilter {
    constructor() {
        Object.defineProperty(this, "logger", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: new common_1.Logger('PrismaException')
        });
    }
    catch(exception) {
        this.logger.error({ message: exception.message });
    }
};
PrismaUnknownRequestExceptionFilter = __decorate([
    (0, core_1.Catch)(client_1.Prisma.PrismaClientUnknownRequestError)
], PrismaUnknownRequestExceptionFilter);
exports.PrismaUnknownRequestExceptionFilter = PrismaUnknownRequestExceptionFilter;
//# sourceMappingURL=prisma-exception-filter.js.map