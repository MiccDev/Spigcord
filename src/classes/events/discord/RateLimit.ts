import Bot from "../../Bot";
import Event from "../Event";
import { RateLimitData } from 'discord.js';

export default abstract class RateLimit extends Event {

    public constructor() {
        super("rateLimit");
    }

    public abstract onCall(bot: Bot, rateLimit: RateLimitData): void | Promise<void>;

} 