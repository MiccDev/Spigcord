"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const CommandHandler_1 = __importDefault(require("./commands/CommandHandler"));
const EventHandler_1 = __importDefault(require("./events/EventHandler"));
const Scheduler_1 = __importDefault(require("./schedule/Scheduler"));
class Bot extends discord_js_1.Client {
    constructor() {
        super({
            intents: new discord_js_1.Intents(32767)
        });
        this._configuration = this.loadConfig();
        this._scheduler = new Scheduler_1.default();
        this._eventHandler = new EventHandler_1.default(this);
        this._commandHandler = new CommandHandler_1.default();
        this.start();
    }
    onEnable() { }
    ;
    start() {
        this._commandHandler.init(this, this._configuration);
        this.onEnable();
        this._eventHandler.init();
        this.login(this._configuration.token);
    }
    loadConfig() {
        let directoryPath = process.cwd();
        let configPath = path_1.default.join(directoryPath, "bot.config.ts");
        if (!fs_1.default.existsSync(configPath))
            throw new Error("Bot configuration file not found! Please create one in the execution directory.");
        const loadedConfig = require(configPath);
        if (!loadedConfig.default)
            throw new Error("No default configuration found.");
        return loadedConfig.default;
    }
    registerEvents(event) {
        this.eventHandler.addEvents(event);
    }
    getCommand(name) {
        return this._commandHandler.getCommand(name);
    }
    getCommands() {
        return this._commandHandler.getCommands();
    }
    getScheduler() {
        return this._scheduler;
    }
    get commandHandler() {
        return this._commandHandler;
    }
    get eventHandler() {
        return this._eventHandler;
    }
    get config() {
        return this._configuration;
    }
}
exports.default = Bot;
