const { MessageEmbed, MessageButton, MessageActionRow } = require("discord.js")
const randomGifs = require("../../randomAnimes.json");
module.exports = {
    name: 'animes',
    async execute({ client, message, args }) {
        var gifs = randomGifs.randoms
        const randoms = gifs[Math.floor(Math.random() * gifs.length)]

        const randomEmbed = new MessageEmbed() // coded by K4H1N
            .setColor("AQUA")
            .setTitle("Random Anime Gifs")
            .setImage(randoms) // coded by K4H1N

        await message.reply({ embeds: [randomEmbed] })
    }
}