import { ApplicationCommandOptionType, REST, Routes } from 'discord.js';
import { logger } from './../utils';
import { DISCORD_TOKEN, DISCORD_CLIENT_ID, GUILD_ID } from './../constants';

const commands = [
    {
        name: 'get-sniping-list',
        description: 'Get an overview of the sniping list',
    },
    {
        name: 'add-ca',
        description: 'Add a contact address to the sniping list',
        options: [
            {
                name: 'contact-address',
                description: 'Fill in contact address',
                type: ApplicationCommandOptionType.String,
                required: true,
            },
        ],
    },
];

const rest = new REST({ version: '10' }).setToken(DISCORD_TOKEN);

export async function registerCommands() {
    try {
        await rest.put(Routes.applicationGuildCommands(DISCORD_CLIENT_ID, GUILD_ID), { body: commands });
        logger.info('Commands are registered');
    } catch (error) {
        logger.info('Commands are not registered');
    }
}
