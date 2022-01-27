import { ThreadMember } from "discord.js";
import Bot from "../../../../../Bot";
import Event from "../../../../Event";

export default abstract class ThreadMemberUpdate extends Event {

    public constructor() {
        super("threadMemberUpdate");
    }

    public abstract onCall(bot: Bot, oldMember: ThreadMember, newMember: ThreadMember): void | Promise<void>;

}