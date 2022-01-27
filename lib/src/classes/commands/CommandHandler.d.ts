import { BotConfiguration } from '../../types';
import Bot from '../Bot';
import BotCommand from './BotCommand';
export default class CommandHandler {
    private _commands;
    constructor();
    init(bot: Bot, config: BotConfiguration): void;
    getCommand(name: string): BotCommand;
    getCommands(): Map<string, BotCommand>;
}
