module.exports = {
    name: 'year',
    description: 'Choose your academic year.',
    options: [
        {
            name: 'year_number',
            type: 'STRING',
            description: 'The year you want the role for',
            required: true,
        },
    ],
    aliases: ['y', 'yr'],

    execute: async (client, interaction) => {
        const input = interaction.options.getString('year_number');
        interaction.reply({ content:input });
    },
};
