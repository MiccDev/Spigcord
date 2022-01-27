import Bot from "../../Bot";
import Event from "../Event";

export default abstract class Ready
extends Event {

    public constructor() {
        super("ready");
    }

    public abstract onCall(bot: Bot): void | Promise<void>;

} 