import Bot from "../../../Bot";
import Event from "../../Event";
import { Message } from 'discord.js';
export default abstract class MessageUpdate extends Event {
    constructor();
    abstract onCall(bot: Bot, oldMessage: Message, newMessage: Message): void | Promise<void>;
}
