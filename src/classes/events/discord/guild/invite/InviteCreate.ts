import Bot from "../../../../Bot";
import Event from "../../../Event";
import { Invite } from 'discord.js';

export default abstract class InviteCreate
extends Event {

    public constructor() {
        super("inviteCreate");
    }

    public abstract onCall(bot: Bot, invite: Invite): void | Promise<void>;

} 