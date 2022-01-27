import { CloseEvent, Role } from "discord.js";
import Bot from "../../../Bot";
import Event from "../../Event";

export default abstract class ShardDisconnect
extends Event {

    public constructor() {
        super("shardDisconnect");
    }

    public abstract onCall(bot: Bot, event: CloseEvent, id: number): void | Promise<void>;

} 