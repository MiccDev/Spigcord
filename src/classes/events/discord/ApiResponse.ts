import { APIRequest } from "discord.js";
import Bot from "../../Bot";
import Event from "../Event";

export default abstract class ApiResponse extends Event {

    public constructor() {
        super("apiResponse");
    }

    public abstract onCall(bot: Bot, request: APIRequest, response: any): void | Promise<void>;

}