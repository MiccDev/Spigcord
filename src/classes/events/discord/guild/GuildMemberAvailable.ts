import Bot from "../../../Bot";
import Event from "../../Event";
import { GuildMember } from 'discord.js';

export default abstract class GuildMemberAvailable extends Event {

    public constructor() {
        super("guildMemberAvailable");
    }

    public abstract onCall(bot: Bot, member: GuildMember): void | Promise<void>;

} 