module.exports = {
    name: 'test',
    description: 'A test command, the bot says hello.',
    aliases: [],

    execute: async (client, interaction) => {
        interaction.reply({ content: 'Hello, I can hear you!' });
    },
};
