import { StageInstance } from "discord.js";
import Bot from "../../../../../Bot";
import Event from "../../../../Event";

export default abstract class StageInstanceDelete extends Event {

    public constructor() {
        super("stageInstanceDelete");
    }

    public abstract onCall(bot: Bot, stageInstace: StageInstance): void | Promise<void>;

} 