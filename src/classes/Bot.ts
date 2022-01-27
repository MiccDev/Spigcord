import { Client, Intents } from "discord.js";
import path from "path";
import fs from "fs";
import { BotConfiguration } from "../types";
import CommandHandler from "./commands/CommandHandler";
import EventHandler from "./events/EventHandler";
import BotCommand from "./commands/BotCommand";
import Event from "./events/Event";
import Scheduler from "./schedule/Scheduler";

export default class Bot extends Client {

    private _eventHandler: EventHandler;
    private _commandHandler: CommandHandler;
    private _configuration: BotConfiguration;
    private _scheduler: Scheduler;

    public constructor() {
        super({
            intents: new Intents(32767)
        });

        this._configuration = this.loadConfig();

        this._scheduler = new Scheduler();

        this._eventHandler = new EventHandler(this);
        this._commandHandler = new CommandHandler();

        this.start();
    }

    public onEnable(): void {};

    private start(): void {
        this._commandHandler.init(this, this._configuration);

        this.onEnable();

        this._eventHandler.init();

        this.login(this._configuration.token);
    }

    private loadConfig(): BotConfiguration {
        let directoryPath = process.cwd();
        let configPath = path.join(directoryPath, "bot.config.ts");

        if(!fs.existsSync(configPath)) throw new Error("Bot configuration file not found! Please create one in the execution directory.");
        
        const loadedConfig = require(configPath);

        if(!loadedConfig.default) throw new Error("No default configuration found.");

        return loadedConfig.default as BotConfiguration;
    }

    public registerEvents(event: Event) {
        this.eventHandler.addEvents(event);
    }

    public getCommand(name: string): BotCommand {
        return this._commandHandler.getCommand(name);
    }

    public getCommands(): Map<string, BotCommand> {
        return this._commandHandler.getCommands();
    }

    public getScheduler(): Scheduler {
        return this._scheduler;
    }

    public get commandHandler(): CommandHandler {
        return this._commandHandler;
    }

    public get eventHandler(): EventHandler {
        return this._eventHandler;
    }

    public get config(): BotConfiguration {
        return this._configuration;
    }

}