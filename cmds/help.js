const discord = require("discord.js")
exports.run = async(bot , message , args) => {
emb = new discord.RichEmbed();
.setTitle("Help")
.setDescription("Du hast den Hilfe Command aufgerufen")
.setColor("BLUE")
.addField("freunde" , "Zeigt dir andere Bots")
.addField("invite" , "So kannst du mich einladen ^.^")
.addField("ticket" , "öffnet ein Ticket!")
.addField("ADMIN COMMANDS" , "-------------------------")
.addField("sticket #ticket-name" , "Schließt das Ticket wieder") 
.setFooter(`${message.author.tag}` , message.author.avatarURL)
message.reply(emb)
}
