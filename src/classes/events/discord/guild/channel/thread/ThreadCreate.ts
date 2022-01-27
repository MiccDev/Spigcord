import { ThreadChannel } from "discord.js";
import Bot from "../../../../../Bot";
import Event from "../../../../Event";

export default abstract class ThreadCreate extends Event {

    public constructor() {
        super("threadCreate");
    }

    public abstract onCall(bot: Bot, thread: ThreadChannel): void | Promise<void>;

}