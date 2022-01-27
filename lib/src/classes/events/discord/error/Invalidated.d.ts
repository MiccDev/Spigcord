import Bot from "../../../Bot";
import Event from "../../Event";
export default abstract class Invalidated extends Event {
    constructor();
    abstract onCall(bot: Bot): void | Promise<void>;
}
