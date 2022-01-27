import { User, Client } from 'discord.js';
import { RawUserData } from 'discord.js/typings/rawDataTypes';
export default class CommandSender extends User {
    constructor(client: Client, rawUserData: RawUserData);
}
