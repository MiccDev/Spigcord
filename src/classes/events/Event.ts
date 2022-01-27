import { Events } from "../../types";
import Bot from "../Bot";

export default abstract class Event {

    public readonly name: Events;

    public constructor(name: Events) {
        this.name = name;
    }

    public abstract onCall(bot: Bot, ...args: any[]): Promise<void>|void;

    public run(bot: Bot, ...args: any[]): void {
        this.onCall(bot, args);
    }

}