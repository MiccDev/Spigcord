"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ErrorCommand_1 = __importDefault(require("./ErrorCommand"));
class BotCommand {
    constructor(bot) {
        this._bot = bot;
        this._command = {
            name: "error"
        };
        this._executor = new ErrorCommand_1.default();
        this._description = "No command description";
        this._args = [];
        this._aliases = [];
    }
    getAsCommand() {
        return this._command;
    }
    setCommand(command) {
        this._command = command;
    }
    setExecutor(commandExecutor) {
        this._executor = commandExecutor;
    }
    getExecutor() {
        return this._executor;
    }
    getDescription() {
        return this._description;
    }
    setDescription(description) {
        this._description = description;
    }
    getArgs() {
        return this._args;
    }
    setArgs(args) {
        this._args = args;
    }
    getAliases() {
        return this._aliases;
    }
    setAliases(aliases) {
        this._aliases = aliases;
    }
    get bot() { return this._bot; }
    ;
}
exports.default = BotCommand;
