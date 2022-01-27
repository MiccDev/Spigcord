"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Event = exports.CommandSender = exports.BotCommand = exports.Bot = void 0;
const Bot_1 = __importDefault(require("./classes/Bot"));
exports.Bot = Bot_1.default;
const BotCommand_1 = __importDefault(require("./classes/commands/BotCommand"));
exports.BotCommand = BotCommand_1.default;
const CommandSender_1 = __importDefault(require("./classes/commands/CommandSender"));
exports.CommandSender = CommandSender_1.default;
const Event_1 = __importDefault(require("./classes/events/Event"));
exports.Event = Event_1.default;
__exportStar(require("./types"), exports);
__exportStar(require("./classes/events/discord/"), exports);
