const fs = require("fs");
const Discord = require("discord.js");
const { Intents, Collection } = Discord;
const Client = new Discord.Client({
	intents: [
		1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096, 8192, 16384,
	],
	partials: ["MESSAGE", "CHANNEL", "REACTION"],
});

const Config = require("./config.json");
const { token, owners } = Config;

// Object.defineProperty(Object.prototype, "client", { value: Client });

Client.commands = new Collection();
Client.slashCommands = new Collection();
Client.contextMenus = new Collection();

require("./handlers/Events.js")(Client);
require("./handlers/Commands.js")(Client);

Client.login(token).catch((error) =>
	console.error("Lütfen tokeni doğru biçimde girin!\n\n" + error)
);

Promise.prototype.del = (ms) => {
  if (this)
    this.then((m) => {
      if (m.deletable) setTimeout(() => m.delete(), Number(ms));
    });
};

process.on("uncaughtException", (err) => console.error(err.stack));
process.on("unhandledRejection", (err) => console.error(err.stack));
Client.on('messageCreate', msg => { 
	if(!msg.guild) return;
	  let ozeluye = ['556843117152698368', 'İD'] // Özel selam vermek istedin kişi id yazın
	  if (msg.content.toLowerCase() === "sa") {
		if (ozeluye) { 
		  msg.reply("Aleyküm Selam Hoşgeldin, özel üye") // 
		} else {
		msg.reply("Aleyküm Selam Hoşgeldin")
	  }
	}
})
