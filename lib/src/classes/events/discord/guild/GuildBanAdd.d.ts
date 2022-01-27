import { GuildBan } from "discord.js";
import Bot from "../../../Bot";
import Event from "../../Event";
export default abstract class GuildBanAdd extends Event {
    constructor();
    abstract onCall(bot: Bot, ban: GuildBan): void | Promise<void>;
}
