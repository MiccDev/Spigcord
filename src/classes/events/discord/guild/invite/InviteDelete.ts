import Bot from "../../../../Bot";
import Event from "../../../Event";
import { Invite } from 'discord.js';

export default abstract class InviteDelete
extends Event {

    public constructor() {
        super("inviteDelete");
    }

    public abstract onCall(bot: Bot, invite: Invite): void | Promise<void>;

} 