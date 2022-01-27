import Bot from "../../Bot";
import Event from "../Event";
import { Presence } from 'discord.js';

export default abstract class PresenceUpdate
extends Event {

    public constructor() {
        super("presenceUpdate");
    }

    public abstract onCall(bot: Bot, oldPresence: Presence, newPresence: Presence): void | Promise<void>;

} 