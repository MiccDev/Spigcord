import { ThreadMember, Collection, Snowflake } from 'discord.js';
import Bot from "../../../../../Bot";
import Event from "../../../../Event";

export default abstract class ThreadMembersUpdate extends Event {

    public constructor() {
        super("threadMembersUpdate");
    }

    public abstract onCall(bot: Bot, oldMembers: Collection<Snowflake, ThreadMember>, newMembers: Collection<Snowflake, ThreadMember>): void | Promise<void>;

}