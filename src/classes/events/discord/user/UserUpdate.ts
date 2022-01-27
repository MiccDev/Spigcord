import { User } from 'discord.js';
import Bot from "../../../Bot";
import Event from "../../Event";

export default abstract class UserUpdate extends Event {

    public constructor() {
        super("userUpdate");
    }

    public abstract onCall(bot: Bot, oldUser: User, newUser: User): void | Promise<void>;

}