module.exports = {
    name: 'ping',
    description: 'The bot replies with Pong.',
    aliases: [],

    execute: async (client, interaction) => {
        interaction.reply({ content: 'Pong!' });
    },
};
