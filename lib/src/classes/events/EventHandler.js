"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const CommandSender_1 = __importDefault(require("../commands/CommandSender"));
class EventHandler {
    constructor(bot) {
        this.bot = bot;
        this._events = new Map();
    }
    init() {
        this.registerBuiltInEvents();
        this._events.forEach((evt, name) => {
            this.bot.on(name, evt.onCall.bind(evt, this.bot));
        });
    }
    registerBuiltInEvents() {
        this.bot.on("messageCreate", this.onMessageCreate.bind(this, this.bot));
    }
    async onMessageCreate(bot, message) {
        if (message.author.bot)
            return;
        if (!bot.config.prefix) {
            console.log("The bot doesn't have a prefix for commands to use, ignore this message if you are not or do not have any commands.");
            return;
        }
        ;
        const prefix = bot.config.prefix;
        if (message.content.indexOf(prefix) !== 0)
            return;
        const args = message.content.slice(prefix.length).trim().split(/ +/g);
        const command = args.shift()?.toLowerCase();
        const cmd = this.bot.getCommands().get(command);
        let cmdFromAlias = null;
        this.bot.getCommands().forEach(tempCmd => {
            if (tempCmd.getAliases().includes(command))
                cmdFromAlias = tempCmd;
        });
        if (!cmd && !cmdFromAlias) {
            let msg = await message.reply(`There is not command with the name ${command}.\nUse ${prefix}help for a list of commands.`);
            setTimeout(msg.delete, 10 * 1000);
            return;
        }
        if (cmd?.getArgs()) {
            let requiredArguments = cmd?.getArgs().filter(arg => arg.type == "required");
            if (args.length < requiredArguments?.length) {
                message.reply(`The command you have executed is missing ${requiredArguments.length - args.length} arguments.`);
                return;
            }
        }
        let error = false;
        if (cmd) {
            error = await cmd.getExecutor().onCommand(new CommandSender_1.default(bot, {
                id: message.author.id
            }), message.channel, cmd.getAsCommand(), command, args);
        }
        else if (cmdFromAlias) {
            error = await cmdFromAlias.getExecutor().onCommand(new CommandSender_1.default(bot, {
                id: message.author.id
            }), message.channel, cmdFromAlias.getAsCommand(), command, args);
        }
        if (error) {
            message.reply(`An error occured during the execution of '${command}'.`);
        }
    }
    addEvents(event) {
        this._events.set(event.name, event);
    }
    getEvents() {
        return this._events;
    }
}
exports.default = EventHandler;
