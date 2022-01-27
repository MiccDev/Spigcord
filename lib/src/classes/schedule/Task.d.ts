import Runnable from "../../interfaces/Runnable";
export default abstract class Task implements Runnable {
    constructor();
    abstract run(): void;
}
