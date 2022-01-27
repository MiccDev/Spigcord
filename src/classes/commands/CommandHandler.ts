import { BotConfiguration, Command } from '../../types';
import Bot from '../Bot';
import BotCommand from './BotCommand';

export default class CommandHandler {

    private _commands: Map<string, BotCommand>;

    public constructor() {
        this._commands = new Map<string, BotCommand>();
    }

    public init(bot: Bot, config: BotConfiguration): void {
        if(!config.commands) return;

        config.commands.forEach((cmdOpts: Command) => {
            let cmd = new BotCommand(bot);
            cmd.setCommand(cmdOpts);
            if(cmdOpts.args) {
                let lastArgType: ("optional"|"required") = "optional";
                cmdOpts.args.forEach((argument) => {
                    lastArgType = argument.type;
                    if(lastArgType == "optional" && argument.type == "required") throw new Error(`Cannot have an optional argument before a required argument in command '${cmdOpts.name}'`);
                })

                cmd.setArgs(cmdOpts.args);
            }

            if(cmdOpts.aliases) cmd.setAliases(cmdOpts.aliases);
            if(cmdOpts.description) cmd.setDescription(cmdOpts.description)
            this._commands.set(cmdOpts.name, cmd);
        });
    }

    public getCommand(name: string): BotCommand {
        if(!this._commands.has(name)) throw new Error(`Command with name ${name} cannot be found!`);
        return this._commands.get(name)!;
    }

    public getCommands(): Map<string, BotCommand> {
        return this._commands;
    }

}