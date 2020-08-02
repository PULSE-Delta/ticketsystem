const discord = require("discord.js")
exports.run = async (bot , message , args) => {   
      const guild = message.guild;
  if (!message.member.hasPermission ("ADMINISTRATOR"))
      return message.reply("Du benötigst die Berechtigung: ADMINISTRATOR");
    
    const usechannel = message.mentions.channels.first();
  if (!usechannel) return message.reply ("Gebe den Ticketnamen an!")
    bot.channels.get(usechannel.id).delete(10000);
    message.reply(`${usechannel} wurde Geschlossen!`);
  }
