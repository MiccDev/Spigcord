import Bot from "../../../Bot";
import Event from "../../Event";
import { Guild } from 'discord.js';
export default abstract class GuildUpdate extends Event {
    constructor();
    abstract onCall(bot: Bot, oldGuild: Guild, newGuild: Guild): void | Promise<void>;
}
