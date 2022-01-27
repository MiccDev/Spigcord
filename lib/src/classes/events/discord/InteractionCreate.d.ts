import Bot from "../../Bot";
import Event from "../Event";
import { Interaction } from 'discord.js';
export default abstract class InteractionCreate extends Event {
    constructor();
    abstract onCall(bot: Bot, interaction: Interaction): void | Promise<void>;
}
