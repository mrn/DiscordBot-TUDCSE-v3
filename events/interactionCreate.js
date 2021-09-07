module.exports = {
    name: 'interactionCreate',
    execute: async (client, interaction) => {
        if (!interaction.isCommand()) return;

        // await interaction.deferReply({ ephemeral: true });

        const { commandName } = interaction;

        if (!client.slashCommands.has(commandName)) return;

        try {
            await client.slashCommands.get(commandName).execute(client, interaction);
        }
        catch (error) {
            console.error(error);
            await interaction.reply({ content: 'There was an error while executing this command!' });
        }
    },
};
