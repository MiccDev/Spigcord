import { Events } from "../../types";
import Bot from "../Bot";
export default abstract class Event {
    readonly name: Events;
    constructor(name: Events);
    abstract onCall(bot: Bot, ...args: any[]): Promise<void> | void;
    run(bot: Bot, ...args: any[]): void;
}
