const { MessageEmbed } = require("discord.js"); // Embed tanımı
module.exports = {
    name: "şifre", // Komutun ismi
    aliases: ["al"], // Komutun ek isimleri
    channel: "GUILD", // DM
    async execute({ Client, message, args }) { // Ana veri çekme işlemleri

      function k4h1n(length) {
        var success = ""; // Sayının son hali
        var numbers = "0123456789"; // Sayı havuzu
        var lengths = numbers.length; // Havuzdaki sayıların uzunluğunun hesaplanması
        for (var i = 0; i < length; i++) {
        success += numbers.charAt(Math.floor(Math.random() * lengths)); // havuzdan sayının rastgele olarak oluşturulması
        }
        return success;
    }

      let kod = k4h1n(6); // Oluşturulacak sayının uzunluğu

      const CodeEmbed = new MessageEmbed()
        .setColor("AQUA")
        .setDescription(`**Oluşturulan Kod** ${kod}`)
      return message.reply({embeds: [CodeEmbed]}) // K4H1N Tarafından Covid-19 Code'ye yapılmıştır.

    }
  }