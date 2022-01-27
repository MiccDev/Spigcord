import Bot from "../../../Bot";
import Event from "../../Event";
export default abstract class ShardReconnecting extends Event {
    constructor();
    abstract onCall(bot: Bot, id: number): void | Promise<void>;
}
