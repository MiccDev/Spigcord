import { Role } from "discord.js";
import Bot from "../../../../Bot";
import Event from "../../../Event";

export default abstract class RoleUpdate
extends Event {

    public constructor() {
        super("roleUpdate");
    }

    public abstract onCall(bot: Bot, oldRole: Role, newRole: Role): void | Promise<void>;

} 