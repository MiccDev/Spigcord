import { Events } from "../../types";
import Event from "./Event";
import Bot from '../Bot';
import { Message, User, TextChannel } from 'discord.js';
import CommandSender from '../commands/CommandSender';
import { RawUserData } from 'discord.js/typings/rawDataTypes';
import BotCommand from '../commands/BotCommand';

export default class EventHandler {

    private _events: Map<Events, Event>;

    public constructor(private bot: Bot) {
        this._events = new Map<Events, Event>();
    }

    public init(): void {
        this.registerBuiltInEvents();
        this._events.forEach((evt, name) => {
            this.bot.on(name as string, evt.onCall.bind(evt, this.bot));
        })
    }

    public registerBuiltInEvents(): void {
        this.bot.on("messageCreate", this.onMessageCreate.bind(this, this.bot));
    }

    public async onMessageCreate(bot: Bot, message: Message): Promise<void> {
        if(message.author.bot) return;
        
        if(!bot.config.prefix) {
            console.log("The bot doesn't have a prefix for commands to use, ignore this message if you are not or do not have any commands.");
            return;
        };
        const prefix: string = bot.config.prefix;
        if(message.content.indexOf(prefix) !== 0) return;

        const args = message.content.slice(prefix.length).trim().split(/ +/g);
        const command = args.shift()?.toLowerCase()!;

        const cmd = this.bot.getCommands().get(command);
        let cmdFromAlias: BotCommand = null!;
        this.bot.getCommands().forEach(tempCmd => {
            if(tempCmd.getAliases().includes(command)) cmdFromAlias = tempCmd;
        });
        
        if(!cmd && !cmdFromAlias) {
            let msg = await message.reply(`There is not command with the name ${command}.\nUse ${prefix}help for a list of commands.`);
            setTimeout(msg.delete, 10 * 1000);
            return;
        }

        if(cmd?.getArgs()) {
            let requiredArguments = cmd?.getArgs().filter(arg => arg.type == "required");
            if(args.length < requiredArguments?.length) {
                message.reply(`The command you have executed is missing ${requiredArguments.length - args.length} arguments.`);
                return;
            }
        }

        let error = false;

        if(cmd) {
            error = await cmd.getExecutor().onCommand(new CommandSender(bot, {
                id: message.author.id
            } as RawUserData), message.channel as TextChannel, cmd.getAsCommand(), command, args);
        } else if(cmdFromAlias) {
            error = await cmdFromAlias.getExecutor().onCommand(new CommandSender(bot, {
                id: message.author.id
            } as RawUserData), message.channel as TextChannel, cmdFromAlias.getAsCommand(), command, args);
        }

        if(error) {
            message.reply(`An error occured during the execution of '${command}'.`);
        }
    }

    public addEvents(event: Event) {
        this._events.set(event.name, event);
    }

    public getEvents(): Map<Events, Event> {
        return this._events;
    }

}