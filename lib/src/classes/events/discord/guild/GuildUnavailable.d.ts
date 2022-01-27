import Bot from "../../../Bot";
import Event from "../../Event";
import { Guild } from 'discord.js';
export default abstract class GuildUnavailable extends Event {
    constructor();
    abstract onCall(bot: Bot, guild: Guild): void | Promise<void>;
}
