module.exports = {
    name: 'say',
    description: 'Say something...',
    options: [
        {
            name: 'content',
            type: 'STRING',
            description: 'The thing you want the bot to say',
            required: true,
        },
    ],
    aliases: ['s'],

    execute: async (client, interaction) => {
        const input = interaction.options.getString('content');
        interaction.reply({ content:input, ephemeral: true });
    },
};
