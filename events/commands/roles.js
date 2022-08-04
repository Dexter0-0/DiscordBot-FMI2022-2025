const { SlashCommandBuilder } = require('discord.js');
const { ActionRowBuilder, SelectMenuBuilder } = require('discord.js');
module.exports = {
	data: new SlashCommandBuilder()
		.setName('roles')
		.setDescription('Alege roluri'),
	async execute(interaction) {
		const row = new ActionRowBuilder()
			.addComponents(
				new SelectMenuBuilder()
					.setCustomId('roles')
					.setPlaceholder('Selectare specializare📙')
					.addOptions(
						{
							label: 'mate-info română',
							value: 'mir',
						},
						{
							label: 'mate-info engleză',
							value: 'mie',
						},
						{
							label: 'mate-info maghiară',
							value: 'mim',
						},
                        {
                            label: 'info română',
							value: 'ir',
                        },
                        {
                            label: 'info engleză',
							value: 'ie',
                        },
						{
                            label: 'info germană',
							value: 'ig',
                        },
						{
                            label: 'info maghiară',
							value: 'im',
                        },
						{
                            label: 'Anul II',
							value: 'bosorogi',
                        },
						{
                            label: 'mate română',
							value: 'mr',
                        },
						{
                            label: 'mate maghiară',
							value: 'mm',
                        },
					),
			);

		await interaction.reply({ content: "Dacă este selectată specializarea greșită este nevoie să fie aleasă cea corectă ca mai apoi să fie reselectată cea greșită pentru a fi eliminată", components: [row] });

	},
};