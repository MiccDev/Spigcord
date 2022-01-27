import { Sticker } from "discord.js";
import Bot from "../../../../../Bot";
import Event from "../../../../Event";

export default abstract class StickerCreate extends Event {

    public constructor() {
        super("stickerCreate");
    }

    public abstract onCall(bot: Bot, sticker: Sticker): void | Promise<void>;

} 