const discord = require("discord.js")
exports.run = async (bot , message , args) => {   
      const guild = message.guild;
    const role = guild.roles.find(r => r.name === "Supporter");
  if (!role) {
      return message.reply("Das Ticket kann nur durch einen Supporter geschlossen werden");
    }
    const usechannel = message.mentions.channels.first();
  if (!usechannel) return message.reply ("Gebe den Ticketnamen an!")
    bot.channels.get(usechannel.id).delete(5000);
    message.channel.send("Geschlossen!");
  }