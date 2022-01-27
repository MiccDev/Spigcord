import { GuildChannel } from "discord.js";
import Bot from "../../../../Bot";
import Event from "../../../Event";


export default abstract class ChannelCreate extends Event {

    public constructor() {
        super("channelCreate");
    }

    public abstract onCall(bot: Bot, channel: GuildChannel): void | Promise<void>;

}