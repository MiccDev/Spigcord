import { CloseEvent } from "discord.js";
import Bot from "../../../Bot";
import Event from "../../Event";
export default abstract class ShardDisconnect extends Event {
    constructor();
    abstract onCall(bot: Bot, event: CloseEvent, id: number): void | Promise<void>;
}
