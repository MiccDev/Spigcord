import { Guild } from "discord.js";
import Bot from "../../../Bot";
import Event from "../../Event";
export default abstract class GuildCreate extends Event {
    constructor();
    abstract onCall(bot: Bot, guild: Guild): void | Promise<void>;
}
