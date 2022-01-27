import Bot from "../../../../Bot";
import Event from "../../../Event";
import { Invite } from 'discord.js';
export default abstract class InviteCreate extends Event {
    constructor();
    abstract onCall(bot: Bot, invite: Invite): void | Promise<void>;
}
