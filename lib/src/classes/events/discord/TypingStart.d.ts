import { Typing } from 'discord.js';
import Bot from "../../Bot";
import Event from "../Event";
export default abstract class TypingStart extends Event {
    constructor();
    abstract onCall(bot: Bot, typing: Typing): void | Promise<void>;
}
