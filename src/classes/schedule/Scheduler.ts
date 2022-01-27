import Runnable from "../../interfaces/Runnable";
import Task from "./Task";

export default class Scheduler {

    public constructor() {}

    public scheduleRepeatingTask(task: Runnable, waitTillStart: number, repeatTimes: number) {
        setTimeout(() => {
            setInterval(task.run, repeatTimes);
        }, waitTillStart);
    }

    public scheduleRunTaskLater(task: Task, waitTillStart: number) {
        setTimeout(task.run, waitTillStart);
    }

}