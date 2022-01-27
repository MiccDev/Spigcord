import Bot from "../../../Bot";
import Event from "../../Event";

export default abstract class Invalidated
extends Event {

    public constructor() {
        super("invalidated");
    }

    public abstract onCall(bot: Bot): void | Promise<void>;

} 