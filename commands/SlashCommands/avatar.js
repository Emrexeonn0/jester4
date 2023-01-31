const { SlashCommandBuilder } = require("@discordjs/builders");
const { Client, CommandInteraction, MessageEmbed } = require("discord.js");
module.exports = {
    data: new SlashCommandBuilder().setName("avatar").setDescription("Kullanıcının avatarını gösterir.").addUserOption((option) => option
                .setName("kullanıcı")
                .setDescription("Avatarı gösterilecek kullanıcı")
                .setRequired(false)
        ),
    /**
     * 
     * @param {Client} client 
     * @param {CommandInteraction} interaction 
     */
    async execute({client, interaction }) {
       
        let member = interaction.options.getMember("kullanıcı") || interaction.member;

        interaction.reply({
            embeds:[
                {
                    title: `${member.user.tag} avatarı`,
                    description: `[Link](${member.user.displayAvatarURL({size:1024,format:"png"})})`,
                    color: "AQUA",
                    image: {url: member.user.displayAvatarURL({size:1024,dynamic:true})}
                }
            ]
        })
       
    }
}