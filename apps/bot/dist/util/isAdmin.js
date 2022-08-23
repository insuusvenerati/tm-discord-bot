"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isAdmin = void 0;
const discord_js_1 = require("discord.js");
const isAdmin = (interaction) => interaction.memberPermissions.bitfield !== discord_js_1.PermissionFlagsBits.Administrator;
exports.isAdmin = isAdmin;
//# sourceMappingURL=isAdmin.js.map