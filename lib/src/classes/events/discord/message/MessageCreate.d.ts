import Bot from "../../../Bot";
import Event from "../../Event";
import { Message } from 'discord.js';
export default abstract class MessageCreate extends Event {
    constructor();
    abstract onCall(bot: Bot, message: Message): void | Promise<void>;
}
