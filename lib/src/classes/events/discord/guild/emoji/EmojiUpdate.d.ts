import Bot from "../../../../Bot";
import Event from "../../../Event";
import { GuildEmoji } from 'discord.js';
export default abstract class EmojiUpdate extends Event {
    constructor();
    abstract onCall(bot: Bot, oldEmoji: GuildEmoji, newEmoji: GuildEmoji): void | Promise<void>;
}
