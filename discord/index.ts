import { Client, IntentsBitField, Channel } from 'discord.js';
import { logger } from './../utils';
import { DISCORD_TOKEN } from './../constants';
import { registerCommands } from './register-commands';
import { addCa } from './commands/add-ca';
import { getSnipingList } from './commands/get-sniping-list';
import { TextChannel } from 'discord.js';

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ],
});

export function initDiscordBot() {
    client.on('ready', (c) => {
        logger.info(`${c.user.tag} is online`);
        registerCommands();
    });

    client.on('interactionCreate', (interaction) => {
        if (!interaction.isChatInputCommand()) return;

        if (interaction.commandName === 'add-ca') {
            const ca = interaction.options.get('contact-address')!.value;
            addCa(ca);
            interaction.reply(
                '"CA: ' + ca + '"' + ' is now added to my sniping list. Im going to snipe the fuck out of it!',
            );
        }

        if (interaction.commandName === 'get-sniping-list') {
            interaction.reply('' + getSnipingList());
        }
    });

    client.login(DISCORD_TOKEN);
}

export function logTransaction(ca: any, url: string) {
    (client.channels.cache.get('1223211285173370931') as TextChannel).send(
        `Token has been bought.\r\n https://dexscreener.com/solana/${ca} \r\n ${url}`,
    );
}
