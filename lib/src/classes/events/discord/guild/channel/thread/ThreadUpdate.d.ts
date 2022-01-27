import { ThreadChannel } from 'discord.js';
import Bot from "../../../../../Bot";
import Event from "../../../../Event";
export default abstract class ThreadUpdate extends Event {
    constructor();
    abstract onCall(bot: Bot, oldChannel: ThreadChannel, newChannel: ThreadChannel): void | Promise<void>;
}
