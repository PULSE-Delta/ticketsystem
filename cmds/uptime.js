const discord = require("discord.js")
const moment = require("moment");
exports.run = async (bot , message , args) => {
    require("moment-duration-format");
    const uptime = moment.duration(bot.uptime).format(" D [Tage], H [Stunden], m [Minuten], s [Sekunden]");
    message.channel.send(uptime)
}