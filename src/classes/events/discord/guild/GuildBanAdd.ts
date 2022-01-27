import { GuildBan } from "discord.js";
import Bot from "../../../Bot";
import Event from "../../Event";

export default abstract class GuildBanAdd extends Event {

    public constructor() {
        super("guildBanAdd");
    }

    public abstract onCall(bot: Bot, ban: GuildBan): void | Promise<void>;

}