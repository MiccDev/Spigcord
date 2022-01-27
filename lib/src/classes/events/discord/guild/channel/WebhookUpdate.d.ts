import { NewsChannel, TextChannel } from "discord.js";
import Bot from "../../../../Bot";
import Event from "../../../Event";
export default abstract class WebhookUpdate extends Event {
    constructor();
    abstract onCall(bot: Bot, channel: TextChannel | NewsChannel): void | Promise<void>;
}
