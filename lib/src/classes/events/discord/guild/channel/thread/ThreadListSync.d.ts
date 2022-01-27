import { ThreadChannel, Collection, Snowflake } from 'discord.js';
import Bot from "../../../../../Bot";
import Event from "../../../../Event";
export default abstract class ThreadListSync extends Event {
    constructor();
    abstract onCall(bot: Bot, threads: Collection<Snowflake, ThreadChannel>): void | Promise<void>;
}
