import Bot from "../../../Bot";
import Event from "../../Event";
export default abstract class ErrorEvent extends Event {
    constructor();
    abstract onCall(bot: Bot, emoji: Error): void | Promise<void>;
}
