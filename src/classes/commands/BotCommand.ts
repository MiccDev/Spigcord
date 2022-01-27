import Bot from "../Bot";
import CommandExecutor from '../../interfaces/CommandExecutor';
import ErrorCommand from './ErrorCommand';
import { Argument, Command } from '../../types';

export default class BotCommand {

    private _bot: Bot;
    private _command: Command;
    private _executor: CommandExecutor;

    private _description: string;
    private _args: Argument[];
    private _aliases: string[];

    public constructor(bot: Bot) {
        this._bot = bot;
        this._command = {
            name: "error"
        };
        this._executor = new ErrorCommand();

        this._description = "No command description";
        this._args = [];
        this._aliases = [];
    }

    public getAsCommand(): Command {
        return this._command;
    }

    public setCommand(command: Command): void {
        this._command = command;
    }

    public setExecutor(commandExecutor: CommandExecutor): void {
        this._executor = commandExecutor;
    }

    public getExecutor(): CommandExecutor {
        return this._executor;
    }

    public getDescription(): string {
        return this._description;
    }

    public setDescription(description: string): void {
        this._description = description;
    }

    public getArgs(): Argument[] {
        return this._args;
    }

    public setArgs(args: Argument[]): void {
        this._args = args;
    }

    public getAliases(): string[] {
        return this._aliases;
    }

    public setAliases(aliases: string[]): void {
        this._aliases = aliases;
    }

    public get bot(): Bot { return this._bot; };
    
}