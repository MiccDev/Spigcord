import Runnable from "../../interfaces/Runnable";

export default abstract class Task implements Runnable {

    public constructor() {}

    public abstract run(): void;

}