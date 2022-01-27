import Bot from "../../../Bot";
import Event from "../../Event";
import { GuildMember } from 'discord.js';

export default abstract class GuildMemberRemove extends Event {

    public constructor() {
        super("guildMemberRemove");
    }

    public abstract onCall(bot: Bot, member: GuildMember): void | Promise<void>;

} 