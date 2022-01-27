import { TextBasedChannel } from "discord.js";
import Bot from "../../../../Bot";
import Event from "../../../Event";


export default abstract class ChannelPinsUpdate extends Event {

    public constructor() {
        super("channelPinsUpdate");
    }

    public abstract onCall(bot: Bot, channel: TextBasedChannel, time: Date): void | Promise<void>;

}