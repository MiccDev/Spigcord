import Bot from "../../../Bot";
import Event from "../../Event";

export default abstract class ErrorEvent extends Event {

    public constructor() {
        super("error");
    }

    public abstract onCall(bot: Bot, emoji: Error): void | Promise<void>;

}