import Bot from '../../../Bot';
import Event from '../../Event';
import { Message } from 'discord.js';

export default abstract class MessageDelete extends Event {

    public constructor() {
        super("messageDelete");
    }

    public abstract onCall(bot: Bot, message: Message): void | Promise<void>;

}