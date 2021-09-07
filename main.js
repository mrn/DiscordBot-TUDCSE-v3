// const { REST } = require('@discordjs/rest');
// const { Routes } = require('discord-api-types/v9');
// const fs = require('fs');
const { Client, Collection, Intents } = require('discord.js');
const { commandHandler, eventHandler, slashHandler } = require('./util/handlers');

const intents = new Intents(1601);
const client = new Client({ intents });
client.commands = new Collection();
client.events = new Collection();
client.slashCommands = new Collection();

require('dotenv').config();
const token = process.env.token;
// const clientId = process.env.clientId;
const guildId = process.env.guildId;
const config = require('./config.json');

// const rest = new REST({ version: '9' }).setToken(token);

// (async () => {
//     try {
//         console.log('Started refreshing application (/) commands.');

//         await rest.put(
//             Routes.applicationGuildCommands(clientId, guildId),
//             { body: commands },
//         );

//         console.log('Successfully reloaded application (/) commands.');
//     }
//     catch (error) {
//         console.error(error);
//     }
// })();

client.once('ready', () => {
    eventHandler(client);
    commandHandler(client);
    slashHandler(client, guildId);
});

// client.on('interactionCreate', async interaction => {
//     console.log(interaction);

//     if (!interaction.isCommand()) return;

//     if (interaction.commandName === 'ping') {
//         await interaction.reply('Pong!');
//     }

//     const { commandName } = interaction;

//     if(!client.commands.has(commandName)) return;

//     try {
//         await client.commands.get(commandName).execute(interaction);
//     }
//     catch (error) {
//         console.error(error);
//         await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
//     }
// });

client.login(token);
