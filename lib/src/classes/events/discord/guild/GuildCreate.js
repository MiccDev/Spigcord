"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Event_1 = __importDefault(require("../../Event"));
class GuildCreate extends Event_1.default {
    constructor() {
        super("guildCreate");
    }
}
exports.default = GuildCreate;
