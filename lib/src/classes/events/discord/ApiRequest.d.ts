import { APIRequest } from "discord.js";
import Bot from "../../Bot";
import Event from "../Event";
export default abstract class ApiRequest extends Event {
    constructor();
    abstract onCall(bot: Bot, request: APIRequest): void | Promise<void>;
}
