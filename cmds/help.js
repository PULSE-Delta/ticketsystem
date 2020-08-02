const discord = require("discord.js")
exports.run = async(bot , message , args) => {
emb = new discord.RichEmbed();
.setTitle("Help")
.setName("Test")
.setColor("BLUE")
message.reply(emb)
}
