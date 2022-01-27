import { GuildEmoji } from "discord.js";
import Bot from "../../../../Bot";
import Event from "../../../Event";

export default abstract class EmojiDelete extends Event {

    public constructor() {
        super("emojiDelete");
    }

    public abstract onCall(bot: Bot, emoji: GuildEmoji): void | Promise<void>;

}