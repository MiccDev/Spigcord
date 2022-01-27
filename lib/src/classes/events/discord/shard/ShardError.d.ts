import Bot from "../../../Bot";
import Event from "../../Event";
export default abstract class ShardError extends Event {
    constructor();
    abstract onCall(bot: Bot, error: Error, shardId: number): void | Promise<void>;
}
