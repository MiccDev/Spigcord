import { Sticker } from "discord.js";
import Bot from "../../../../../Bot";
import Event from "../../../../Event";
export default abstract class StickerCreate extends Event {
    constructor();
    abstract onCall(bot: Bot, sticker: Sticker): void | Promise<void>;
}
