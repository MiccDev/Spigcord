"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
class CommandSender extends discord_js_1.User {
    constructor(client, rawUserData) {
        super(client, rawUserData);
    }
}
exports.default = CommandSender;
