import { GuildBan } from "discord.js";
import Bot from "../../../Bot";
import Event from "../../Event";

export default abstract class GuildBanRemove extends Event {

    public constructor() {
        super("guildBanRemove");
    }

    public abstract onCall(bot: Bot, ban: GuildBan): void | Promise<void>;

}