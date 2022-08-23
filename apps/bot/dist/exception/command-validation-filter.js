"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommandValidationFilter = void 0;
const core_1 = require("@discord-nestjs/core");
const runtime_1 = require("@prisma/client/runtime");
const discord_js_1 = require("discord.js");
let CommandValidationFilter = class CommandValidationFilter {
    async catch(exceptionList, metadata) {
        const [interaction] = metadata.eventArgs;
        const embeds = exceptionList.map((exception) => new discord_js_1.EmbedBuilder().setColor('Red').addFields(Object.values(exception.constraints).map((value) => ({
            name: exception.property,
            value,
        }))));
        if (interaction.isCommand())
            await interaction.reply({ embeds });
    }
};
CommandValidationFilter = __decorate([
    (0, core_1.Catch)(runtime_1.PrismaClientKnownRequestError)
], CommandValidationFilter);
exports.CommandValidationFilter = CommandValidationFilter;
//# sourceMappingURL=command-validation-filter.js.map