import { Client } from "discord.js";
import { BotConfiguration } from "../types";
import CommandHandler from "./commands/CommandHandler";
import EventHandler from "./events/EventHandler";
import BotCommand from "./commands/BotCommand";
import Event from "./events/Event";
import Scheduler from "./schedule/Scheduler";
export default class Bot extends Client {
    private _eventHandler;
    private _commandHandler;
    private _configuration;
    private _scheduler;
    constructor();
    onEnable(): void;
    private start;
    private loadConfig;
    registerEvents(event: Event): void;
    getCommand(name: string): BotCommand;
    getCommands(): Map<string, BotCommand>;
    getScheduler(): Scheduler;
    get commandHandler(): CommandHandler;
    get eventHandler(): EventHandler;
    get config(): BotConfiguration;
}
