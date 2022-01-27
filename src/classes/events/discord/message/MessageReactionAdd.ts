import Bot from "../../../Bot";
import Event from "../../Event";
import { MessageReaction, User } from 'discord.js';

export default abstract class MessageReactionAdd
extends Event {

    public constructor() {
        super("messageReactionAdd");
    }

    public abstract onCall(bot: Bot, messageReaction: MessageReaction, user: User): void | Promise<void>;

} 