import Bot from "../../../Bot";
import Event from "../../Event";

export default abstract class ShardReconnecting
extends Event {

    public constructor() {
        super("shardReconnecting");
    }

    public abstract onCall(bot: Bot, id: number): void | Promise<void>;

} 