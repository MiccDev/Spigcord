import Bot from "../../../Bot";
import Event from "../../Event";
import { GuildMember } from 'discord.js';
export default abstract class GuildMemberRemove extends Event {
    constructor();
    abstract onCall(bot: Bot, member: GuildMember): void | Promise<void>;
}
