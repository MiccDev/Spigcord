import { VoiceState } from 'discord.js';
import Bot from "../../../Bot";
import Event from "../../Event";
export default abstract class VoiceStateUpdate extends Event {
    constructor();
    abstract onCall(bot: Bot, oldState: VoiceState, newState: VoiceState): void | Promise<void>;
}
