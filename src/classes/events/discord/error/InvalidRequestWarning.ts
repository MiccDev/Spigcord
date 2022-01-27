import Bot from "../../../Bot";
import Event from "../../Event";
import { InvalidRequestWarningData } from 'discord.js';

export default abstract class InvalidRequestWarningEvent
extends Event {

    public constructor() {
        super("invalidRequestWarning");
    }

    public abstract onCall(bot: Bot, invalidRequestWarningData: InvalidRequestWarningData): void | Promise<void>;

} 