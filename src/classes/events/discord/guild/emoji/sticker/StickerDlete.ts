import {
    Sticker
} from "discord.js";
import Bot from "../../../../../Bot";
import Event from "../../../../Event";

export default abstract class StickerDelete extends Event {

    public constructor() {
        super("stickerDelete");
    }

    public abstract onCall(bot: Bot, sticker: Sticker): void | Promise < void > ;

}