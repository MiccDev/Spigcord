import Runnable from "../../interfaces/Runnable";
import Task from "./Task";
export default class Scheduler {
    constructor();
    scheduleRepeatingTask(task: Runnable, waitTillStart: number, repeatTimes: number): void;
    scheduleRunTaskLater(task: Task, waitTillStart: number): void;
}
