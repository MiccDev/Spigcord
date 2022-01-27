import Bot from "../../../Bot";
import Event from "../../Event";
import { Collection, Guild, GuildMember, Snowflake } from 'discord.js';

export type GuildMemberChunkProperties = {
    index: number,
    count: number,
    nonce?: string
}

export default abstract class GuildMembersChunk extends Event {

    public constructor() {
        super("guildMembersChunk");
    }

    public abstract onCall(bot: Bot, members: Collection<Snowflake, GuildMember>, guild: Guild, chunk: GuildMemberChunkProperties): void | Promise<void>;

} 