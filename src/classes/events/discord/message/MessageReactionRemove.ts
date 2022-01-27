import Bot from "../../../Bot";
import Event from "../../Event";
import { MessageReaction, User } from 'discord.js';

export default abstract class MessageReactionRemove
extends Event {

    public constructor() {
        super("messageReactionRemove");
    }

    public abstract onCall(bot: Bot, messageReaction: MessageReaction, user: User): void | Promise<void>;

} 