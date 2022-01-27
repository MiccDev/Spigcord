import Bot from "../../../Bot";
import Event from "../../Event";

export default abstract class Warn extends Event {

    public constructor() {
        super("warn");
    }

    public abstract onCall(bot: Bot, info: string): void | Promise<void>;

}