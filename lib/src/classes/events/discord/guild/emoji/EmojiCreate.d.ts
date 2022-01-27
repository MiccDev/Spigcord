import { GuildEmoji } from "discord.js";
import Bot from "../../../../Bot";
import Event from "../../../Event";
export default abstract class EmojiCreate extends Event {
    constructor();
    abstract onCall(bot: Bot, emoji: GuildEmoji): void | Promise<void>;
}
