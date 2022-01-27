export declare type Events = ('rateLimit' | 'invalidRequestWarning' | 'apiResponse' | 'apiRequest' | 'ready'
/**
 * @deprecated See {@link https|//github.com/discord/discord-api-docs/issues/3690 this issue} for more information.
 */
 | 'applicationCommandCreate'
/**
 * @deprecated See {@link https|//github.com/discord/discord-api-docs/issues/3690 this issue} for more information.
 */
 | 'applicationCommandDelete'
/**
 * @deprecated See {@link https|//github.com/discord/discord-api-docs/issues/3690 this issue} for more information.
 */
 | 'applicationCommandUpdate' | 'guildCreate' | 'guildDelete' | 'guildUpdate' | 'guildUnavailable' | 'guildMemberAdd' | 'guildMemberRemove' | 'guildMemberUpdate' | 'guildMemberAvailable' | 'guildMembersChunk' | 'guildIntegrationsUpdate' | 'roleCreate' | 'roleDelete' | 'inviteCreate' | 'inviteDelete' | 'roleUpdate' | 'emojiCreate' | 'emojiDelete' | 'emojiUpdate' | 'guildBanAdd' | 'guildBanRemove' | 'channelCreate' | 'channelDelete' | 'channelUpdate' | 'channelPinsUpdate' | 'messageCreate' | 'messageDelete' | 'messageUpdate' | 'messageDeleteBulk' | 'messageReactionAdd' | 'messageReactionRemove' | 'messageReactionRemoveAll' | 'messageReactionRemoveEmoji' | 'threadCreate' | 'threadDelete' | 'threadUpdate' | 'threadListSync' | 'threadMemberUpdate' | 'threadMembersUpdate' | 'userUpdate' | 'presenceUpdate' | 'voiceServerUpdate' | 'voiceStateUpdate' | 'typingStart' | 'webhookUpdate' | 'interactionCreate' | 'error' | 'warn' | 'debug' | 'shardDisconnect' | 'shardError' | 'shardReconnecting' | 'shardReady' | 'shardResume' | 'invalidated' | 'raw' | 'stageInstanceCreate' | 'stageInstanceUpdate' | 'stageInstanceDelete' | 'stickerCreate' | 'stickerDelete' | 'stickerUpdate');
export declare type Argument = {
    type: "required" | "optional";
    arg: string;
};
export declare type Command = {
    name: string;
    description?: string;
    args?: Argument[];
    aliases?: string[];
};
export declare type BotConfiguration = {
    token: string;
    prefix?: string;
    commands?: Command[];
};
