import Bot from "../../../Bot";
import Event from "../../Event";
export default abstract class ShardResume extends Event {
    constructor();
    abstract onCall(bot: Bot, id: number, replayedEvents: number): void | Promise<void>;
}
