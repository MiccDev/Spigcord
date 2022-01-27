import Bot from "../../../Bot";
import Event from "../../Event";
import { MessageReaction, Message, Snowflake, Collection } from 'discord.js';
export default abstract class MessageReactionRemoveAll extends Event {
    constructor();
    abstract onCall(bot: Bot, message: Message, reactions: Collection<(string | Snowflake), MessageReaction>): void | Promise<void>;
}
