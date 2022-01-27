import Bot from "../../../Bot";
import Event from "../../Event";
import { MessageReaction, User, Message, Snowflake, Collection } from 'discord.js';

export default abstract class MessageReactionRemoveAll
extends Event {

    public constructor() {
        super("messageReactionRemoveAll");
    }

    public abstract onCall(bot: Bot, message: Message, reactions: Collection<(string|Snowflake), MessageReaction>): void | Promise<void>;

} 