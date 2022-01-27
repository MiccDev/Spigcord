import { StageInstance } from "discord.js";
import Bot from "../../../../../Bot";
import Event from "../../../../Event";

export default abstract class StageInstanceUpdate extends Event {

    public constructor() {
        super("stageInstanceUpdate");
    }

    public abstract onCall(bot: Bot, oldStageInstace: StageInstance, newStageInstace: StageInstance): void | Promise<void>;

} 