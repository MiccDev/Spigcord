import { Role } from "discord.js";
import Bot from "../../../../Bot";
import Event from "../../../Event";

export default abstract class RoleDelete
extends Event {

    public constructor() {
        super("roleDelete");
    }

    public abstract onCall(bot: Bot, role: Role): void | Promise<void>;

} 