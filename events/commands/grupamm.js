const { SlashCommandBuilder } = require('discord.js');
const { ActionRowBuilder, SelectMenuBuilder } = require('discord.js');
module.exports = {
	data: new SlashCommandBuilder()
		.setName('grupamm')
		.setDescription('Alege grupa mate-info română'),
	async execute(interaction) {
		const row = new ActionRowBuilder()
			.addComponents(
				new SelectMenuBuilder()
					.setCustomId('grupamm')
					.setPlaceholder('Selectare grupă📒')
					.addOptions(
						{
							label: '111',
							value: 'm111',
						},
						{
							label: '112',
							value: 'm112',
						},
					),
			);

		await interaction.reply({  components: [row] });

	},
};