import Bot from "../../Bot";
import Event from "../Event";
export default abstract class Ready extends Event {
    constructor();
    abstract onCall(bot: Bot): void | Promise<void>;
}
