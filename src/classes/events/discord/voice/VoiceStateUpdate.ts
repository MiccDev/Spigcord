import { VoiceState } from 'discord.js';
import Bot from "../../../Bot";
import Event from "../../Event";

export default abstract class VoiceStateUpdate extends Event {

    public constructor() {
        super("voiceStateUpdate");
    }

    public abstract onCall(bot: Bot, oldState: VoiceState, newState: VoiceState): void | Promise<void>;

}