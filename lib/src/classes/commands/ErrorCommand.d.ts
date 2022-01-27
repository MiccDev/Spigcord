import { Channel } from 'discord.js';
import CommandExecutor from '../../interfaces/CommandExecutor';
import { Command } from '../../types';
import CommandSender from './CommandSender';
export default class ErrorCommand implements CommandExecutor {
    constructor();
    onCommand(sender: CommandSender, channel: Channel, command: Command, label: string, args: string[]): boolean;
}
