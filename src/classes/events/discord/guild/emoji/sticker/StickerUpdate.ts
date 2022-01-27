import { Sticker } from "discord.js";
import Bot from "../../../../../Bot";
import Event from "../../../../Event";

export default abstract class StickerUpdate extends Event {

    public constructor() {
        super("stickerUpdate");
    }

    public abstract onCall(bot: Bot, oldSticker: Sticker, newSticker: Sticker): void | Promise<void>;

}