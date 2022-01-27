import { Events } from "../../types";
import Event from "./Event";
import Bot from '../Bot';
import { Message } from 'discord.js';
export default class EventHandler {
    private bot;
    private _events;
    constructor(bot: Bot);
    init(): void;
    registerBuiltInEvents(): void;
    onMessageCreate(bot: Bot, message: Message): Promise<void>;
    addEvents(event: Event): void;
    getEvents(): Map<Events, Event>;
}
