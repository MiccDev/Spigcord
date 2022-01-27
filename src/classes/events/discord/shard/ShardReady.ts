import { Snowflake } from "discord.js";
import Bot from "../../../Bot";
import Event from "../../Event";

export default abstract class ShardReady
extends Event {

    public constructor() {
        super("shardReady");
    }

    public abstract onCall(bot: Bot, id: number, unavailableGuilds?: Set<Snowflake>): void | Promise<void>;

} 