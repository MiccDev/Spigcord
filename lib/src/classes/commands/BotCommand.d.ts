import Bot from "../Bot";
import CommandExecutor from '../../interfaces/CommandExecutor';
import { Argument, Command } from '../../types';
export default class BotCommand {
    private _bot;
    private _command;
    private _executor;
    private _description;
    private _args;
    private _aliases;
    constructor(bot: Bot);
    getAsCommand(): Command;
    setCommand(command: Command): void;
    setExecutor(commandExecutor: CommandExecutor): void;
    getExecutor(): CommandExecutor;
    getDescription(): string;
    setDescription(description: string): void;
    getArgs(): Argument[];
    setArgs(args: Argument[]): void;
    getAliases(): string[];
    setAliases(aliases: string[]): void;
    get bot(): Bot;
}
