const fs = require('fs');
const path = require('path');

module.exports = {
    async eventHandler(client) {
        const dir = path.join(__dirname, '..', '/', 'events');
        const files = fs.readdirSync(dir).filter(file => file.endsWith('.js'));

        files.forEach(async (file) => {
            const event = require(dir + '/' + file);
            client.events.set(event.name, event);
        });

        client.events.forEach(async (event) => {
            if (event.name == 'ready') {
                event.execute(client);
            }
            else {
                client.on(event.name, (...args) => {
                    event.execute(client, ...args);
                });
            }
        });
    },

    async commandHandler(client) {
        const dir = path.join(__dirname, '..', '/', 'commands');
        const files = fs.readdirSync(dir).filter(file => file.endsWith('.js'));

        files.forEach(async (file) => {
            const command = require(dir + '/' + file);
            client.commands.set(command.name, command);
            // command.aliases.forEach(alias => {
            //     client.aliases.set(alias, command.name);
            // });
        });
    },

    async slashHandler(client, guildId) {
        const dir = path.join(__dirname, '..', '/', 'slash_commands');
        const files = fs.readdirSync(dir).filter(file => file.endsWith('.js'));
        const slashCommandsData = [];

        files.forEach(async (file) => {
            const slashCommand = require(dir + '/' + file);
            client.slashCommands.set(slashCommand.name, slashCommand);
            slashCommandsData.push(slashCommand);
            // slashCommand.aliases.forEach(alias => {
            //     client.aliases.set(alias, slashCommand.name);
            // });
        });

        client.guilds.cache.get(guildId).commands.set(slashCommandsData);
    },
};
