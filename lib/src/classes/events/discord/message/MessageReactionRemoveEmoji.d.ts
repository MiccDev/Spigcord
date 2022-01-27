import Bot from "../../../Bot";
import Event from "../../Event";
import { MessageReaction } from 'discord.js';
export default abstract class MessageReactionRemoveEmoji extends Event {
    constructor();
    abstract onCall(bot: Bot, reaction: MessageReaction): void | Promise<void>;
}
