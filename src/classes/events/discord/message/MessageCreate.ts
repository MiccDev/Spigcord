import Bot from "../../../Bot";
import Event from "../../Event";
import { Message } from 'discord.js';

export default abstract class MessageCreate
extends Event {

    public constructor() {
        super("messageCreate");
    }

    public abstract onCall(bot: Bot, message: Message): void | Promise<void>;

} 