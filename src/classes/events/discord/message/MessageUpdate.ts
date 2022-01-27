import Bot from "../../../Bot";
import Event from "../../Event";
import { MessageReaction, User, Message, Snowflake, Collection } from 'discord.js';

export default abstract class MessageUpdate
extends Event {

    public constructor() {
        super("messageUpdate");
    }

    public abstract onCall(bot: Bot, oldMessage: Message, newMessage: Message): void | Promise<void>;

} 