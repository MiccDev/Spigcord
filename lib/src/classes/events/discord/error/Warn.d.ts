import Bot from "../../../Bot";
import Event from "../../Event";
export default abstract class Warn extends Event {
    constructor();
    abstract onCall(bot: Bot, info: string): void | Promise<void>;
}
