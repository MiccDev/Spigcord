import Bot from "../../../Bot";
import Event from "../../Event";
import { Collection, Snowflake, Message } from 'discord.js';

export default abstract class MessageDeleteBulk
extends Event {

    public constructor() {
        super("messageDeleteBulk");
    }

    public abstract onCall(bot: Bot, messages: Collection<Snowflake, Message>): void | Promise<void>;

} 