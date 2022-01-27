"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ErrorCommand {
    constructor() { }
    onCommand(sender, channel, command, label, args) {
        sender.send("There was an error executing this command.");
        return false;
    }
}
exports.default = ErrorCommand;
