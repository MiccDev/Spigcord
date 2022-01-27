import { Command } from "../types";
import CommandSender from "../classes/commands/CommandSender";
import { Channel } from "discord.js";
export default interface CommandExecutor {
    onCommand(sender: CommandSender, channel: Channel, command: Command, label: string, args: string[]): Promise<boolean> | boolean;
}
