import Bot from "../../../../Bot";
import Event from "../../../Event";
import { GuildEmoji } from 'discord.js';

export default abstract class EmojiUpdate extends Event {

    public constructor() {
        super("emojiDelete");
    }

    public abstract onCall(bot: Bot, oldEmoji: GuildEmoji, newEmoji: GuildEmoji): void | Promise<void>;

}