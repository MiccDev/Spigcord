import Bot from "../../../Bot";
import Event from "../../Event";
import { Collection, Snowflake, Message } from 'discord.js';
export default abstract class MessageDeleteBulk extends Event {
    constructor();
    abstract onCall(bot: Bot, messages: Collection<Snowflake, Message>): void | Promise<void>;
}
