const { MessageEmbed } = require("discord.js");
const fs = require('node:fs');
const path = require('node:path');
const dotenv = require("dotenv");
const log = require("../../utils/log/log.js");
const functions = require("../../utils/funcs/functions.js");
dotenv.config();

module.exports = {
    commandInfo: {
        name: "register",
        description: "Creates an account on Spider backend.",
        options: [
            {
                name: "username",
                description: "Target username.",
                required: true,
                type: 3 // string
            },
            {
                name: "email",
                description: "Target email.",
                required: true,
                type: 3 // string
            },
            {
                name: "password",
                description: "Target password.",
                required: true,
                type: 3 // string
            }
        ],
    },
    execute: async (interaction) => {
        await interaction.deferReply({ ephemeral: true });
        const username = interaction.options.getString('username');
        const email = interaction.options.getString('email');
        const password = interaction.options.getString('password');
        const discordId = interaction.user.id;
        
        functions.createAccount(username, email, password, discordId);
        const embed = new MessageEmbed()
	        .setColor(0x0099FF)
	        .setTitle('Welcome to Spider,', + username + '!')
	        .setAuthor({ name: 'Spider Backend', iconURL: , url: '' })
	        .setDescription('This backend is in beta, if you find any bugs please report them in the issues section of the github page.')
	        .addFields(
		        { name: 'Username', value: username },
		        { name: 'email', value: email, inline: true },
	        )
	        .setTimestamp()
	        .setFooter({ text: 'Spider Backend', iconURL: '' });

        interaction.editReply({ content: 'Successfully created your account!', embeds: [embed], ephemeral: true });
    }
}
