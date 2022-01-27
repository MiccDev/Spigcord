import { StageInstance } from "discord.js";
import Bot from "../../../../../Bot";
import Event from "../../../../Event";

export default abstract class StageInstanceCreate extends Event {

    public constructor() {
        super("stageInstanceCreate");
    }

    public abstract onCall(bot: Bot, stageInstace: StageInstance): void | Promise<void>;

} 