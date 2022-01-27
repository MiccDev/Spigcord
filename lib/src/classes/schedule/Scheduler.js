"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Scheduler {
    constructor() { }
    scheduleRepeatingTask(task, waitTillStart, repeatTimes) {
        setTimeout(() => {
            setInterval(task.run, repeatTimes);
        }, waitTillStart);
    }
    scheduleRunTaskLater(task, waitTillStart) {
        setTimeout(task.run, waitTillStart);
    }
}
exports.default = Scheduler;
