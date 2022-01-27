"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BotCommand_1 = __importDefault(require("./BotCommand"));
class CommandHandler {
    constructor() {
        this._commands = new Map();
    }
    init(bot, config) {
        if (!config.commands)
            return;
        config.commands.forEach((cmdOpts) => {
            let cmd = new BotCommand_1.default(bot);
            cmd.setCommand(cmdOpts);
            if (cmdOpts.args) {
                let lastArgType = "optional";
                cmdOpts.args.forEach((argument) => {
                    lastArgType = argument.type;
                    if (lastArgType == "optional" && argument.type == "required")
                        throw new Error(`Cannot have an optional argument before a required argument in command '${cmdOpts.name}'`);
                });
                cmd.setArgs(cmdOpts.args);
            }
            if (cmdOpts.aliases)
                cmd.setAliases(cmdOpts.aliases);
            if (cmdOpts.description)
                cmd.setDescription(cmdOpts.description);
            this._commands.set(cmdOpts.name, cmd);
        });
    }
    getCommand(name) {
        if (!this._commands.has(name))
            throw new Error(`Command with name ${name} cannot be found!`);
        return this._commands.get(name);
    }
    getCommands() {
        return this._commands;
    }
}
exports.default = CommandHandler;
