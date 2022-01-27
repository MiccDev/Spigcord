import Bot from "../../Bot";
import Event from "../Event";
import { RateLimitData } from 'discord.js';
export default abstract class RateLimit extends Event {
    constructor();
    abstract onCall(bot: Bot, rateLimit: RateLimitData): void | Promise<void>;
}
