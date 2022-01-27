import { ThreadChannel } from "discord.js";
import Bot from "../../../../../Bot";
import Event from "../../../../Event";

export default abstract class ThreadDelete extends Event {

    public constructor() {
        super("threadDelete");
    }

    public abstract onCall(bot: Bot, thread: ThreadChannel): void | Promise<void>;

}