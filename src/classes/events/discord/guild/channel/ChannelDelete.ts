import { DMChannel, GuildChannel } from "discord.js";
import Bot from "../../../../Bot";
import Event from "../../../Event";


export default abstract class ChannelDelete extends Event {

    public constructor() {
        super("channelDelete");
    }

    public abstract onCall(bot: Bot, channel: GuildChannel|DMChannel): void | Promise<void>;

}