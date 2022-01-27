import { Role } from "discord.js";
import Bot from "../../../../Bot";
import Event from "../../../Event";

export default abstract class RoleCreate
extends Event {

    public constructor() {
        super("roleCreate");
    }

    public abstract onCall(bot: Bot, role: Role): void | Promise<void>;

} 