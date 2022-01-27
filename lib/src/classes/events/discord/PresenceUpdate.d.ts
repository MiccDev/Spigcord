import Bot from "../../Bot";
import Event from "../Event";
import { Presence } from 'discord.js';
export default abstract class PresenceUpdate extends Event {
    constructor();
    abstract onCall(bot: Bot, oldPresence: Presence, newPresence: Presence): void | Promise<void>;
}
