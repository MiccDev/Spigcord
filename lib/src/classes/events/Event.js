"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Event {
    constructor(name) {
        this.name = name;
    }
    run(bot, ...args) {
        this.onCall(bot, args);
    }
}
exports.default = Event;
