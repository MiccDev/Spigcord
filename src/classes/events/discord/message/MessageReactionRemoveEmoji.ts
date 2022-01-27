import Bot from "../../../Bot";
import Event from "../../Event";
import { MessageReaction, User, Message, Snowflake, Collection } from 'discord.js';

export default abstract class MessageReactionRemoveEmoji
extends Event {

    public constructor() {
        super("messageReactionRemoveEmoji");
    }

    public abstract onCall(bot: Bot, reaction: MessageReaction): void | Promise<void>;

} 