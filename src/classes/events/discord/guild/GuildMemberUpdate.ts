import Bot from "../../../Bot";
import Event from "../../Event";
import { GuildMember } from 'discord.js';

export default abstract class GuildMemberUpdate extends Event {

    public constructor() {
        super("guildMemberUpdate");
    }

    public abstract onCall(bot: Bot, oldMember: GuildMember, newMember: GuildMember): void | Promise<void>;

} 