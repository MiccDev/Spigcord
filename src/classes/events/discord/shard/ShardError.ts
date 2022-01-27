import Bot from "../../../Bot";
import Event from "../../Event";

export default abstract class ShardError
extends Event {

    public constructor() {
        super("shardDisconnect");
    }

    public abstract onCall(bot: Bot, error: Error, shardId: number): void | Promise<void>;

} 