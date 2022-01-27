import Bot from "../../Bot";
import Event from "../Event";
import { Interaction } from 'discord.js';

export default abstract class InteractionCreate
extends Event {

    public constructor() {
        super("interactionCreate");
    }

    public abstract onCall(bot: Bot, interaction: Interaction): void | Promise<void>;

} 