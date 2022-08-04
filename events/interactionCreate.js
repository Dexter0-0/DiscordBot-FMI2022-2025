const fs = require('node:fs');
const path = require('node:path');
const { Client, Collection, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.commands = new Collection();
const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const filePath = path.join(commandsPath, file);
    const command = require(filePath);
    client.commands.set(command.data.name, command);
}
const { miRomana, miEngleza, miMagiara, iRomana, iEngleza, iGermana, iMaghiara, anul2, mateRO, mateM } = require('./idRoluri.json');
module.exports = {
    name: 'interactionCreate',
    on: true,
    async execute(interaction) {
        if (interaction.isSelectMenu()) {
            let choice = interaction.values[0]
            const member = interaction.member
            try{
            if (choice == 'mir') {
                if (member.roles.cache.some(role => role.id == miRomana)) {
                    interaction.reply({ content: "Rol eliminat", ephemeral: true })
                    member.roles.remove(miRomana)
                }
                else {
                    member.roles.add(miRomana)
                    await interaction.reply({ content: "Rol adăugat", ephemeral: true })
                }
            }

            else if (choice == 'mie') {
                if (member.roles.cache.some(role => role.id == miEngleza)) {
                    interaction.reply({ content: "Rol eliminat", ephemeral: true })
                    member.roles.remove(miEngleza)
                }
                else {
                    member.roles.add(miEngleza)
                    await interaction.reply({ content: "Rol adăugat", ephemeral: true })
                }
            }
            else if (choice == 'mim') {
                if (member.roles.cache.some(role => role.id == miMagiara)) {
                    interaction.reply({ content: "Rol eliminat", ephemeral: true })
                    member.roles.remove(miMagiara)
                }
                else {
                    member.roles.add(miMagiara)
                    await interaction.reply({ content: "Rol adăugat", ephemeral: true })
                }
            }
            else if (choice == 'ir') {
                if (member.roles.cache.some(role => role.id == iRomana)) {
                    interaction.reply({ content: "Rol eliminat", ephemeral: true })
                    member.roles.remove(iRomana)
                }
                else {
                    member.roles.add(iRomana)
                    await interaction.reply({ content: "Rol adăugat", ephemeral: true })
                }
            }
            else if (choice == 'ie') {
                if (member.roles.cache.some(role => role.id == iEngleza)) {
                    interaction.reply({ content: "Rol eliminat", ephemeral: true })
                    member.roles.remove(iEngleza)
                }
                else {
                    member.roles.add(iEngleza)
                    await interaction.reply({ content: "Rol adăugat", ephemeral: true })
                }
            }
            else if (choice == 'ig') {
                if (member.roles.cache.some(role => role.id == iGermana)) {
                    interaction.reply({ content: "Rol eliminat", ephemeral: true })
                    member.roles.remove(iGermana)
                }
                else {
                    member.roles.add(iGermana)
                    await interaction.reply({content: "Rol adăugat", ephemeral: true})
                }
            }
            else if (choice == 'im') {
                if (member.roles.cache.some(role => role.id == iMaghiara)) {
                    interaction.reply({ content: "Rol eliminat", ephemeral: true })
                    member.roles.remove(iMaghiara)
                }
                else {
                    member.roles.add(iMaghiara)
                    await interaction.reply({ content: "Rol adăugat", ephemeral: true })
                }
            }
            else if (choice == 'bosorogi') {
                if (member.roles.cache.some(role => role.id == anul2)) {
                    interaction.reply({ content: "Rol eliminat", ephemeral: true })
                    member.roles.remove(anul2)
                }
                else {
                    member.roles.add(anul2)
                    await interaction.reply({ content: "Rol adăugat", ephemeral: true })
                }
            }
            else if (choice == 'mr') {
                if (member.roles.cache.some(role => role.id == mateRO)) {
                    interaction.reply({ content: "Rol eliminat", ephemeral: true })
                    member.roles.remove(mateRO)
                }
                else {
                    member.roles.add(mateRO)
                    await interaction.reply({ content: "Rol adăugat", ephemeral: true })
                }
            }
            else if (choice == 'mm') {
                if (member.roles.cache.some(role => role.id == mateM)) {
                    interaction.reply({ content: "Rol eliminat", ephemeral: true })
                    member.roles.remove(mateM)
                }
                else {
                    member.roles.add(mateM)
                    await interaction.reply({ content: "Rol adăugat", ephemeral: true })
                }
            }
        }
        catch(error){
            console.error(error);
            await interaction.reply({ content: 'O crăpat botul!', ephemeral: true });
        }
        }
        const command = client.commands.get(interaction.commandName);

        if (!command) return;

        try {
            await command.execute(interaction);
        } catch (error) {
            console.error(error);
            await interaction.reply({ content: 'O crăpat botul!', ephemeral: true });

        }

    },

};

