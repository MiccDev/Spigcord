import { DMChannel, GuildChannel } from 'discord.js';
import Bot from "../../../../Bot";
import Event from "../../../Event";
export default abstract class ChannelUpdate extends Event {
    constructor();
    abstract onCall(bot: Bot, oldChannel: DMChannel | GuildChannel, newChannel: DMChannel | GuildChannel): void | Promise<void>;
}
