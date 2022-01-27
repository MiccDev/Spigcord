import { ThreadMember } from "discord.js";
import Bot from "../../../../../Bot";
import Event from "../../../../Event";
export default abstract class ThreadMemberUpdate extends Event {
    constructor();
    abstract onCall(bot: Bot, oldMember: ThreadMember, newMember: ThreadMember): void | Promise<void>;
}
