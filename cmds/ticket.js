const discord = require("discord.js");
exports.run = async (bot, message, args) => {
  if (
    message.guild.channels.some(
      channel =>
        channel.name.toLowerCase() === message.author.username + "-s-ticket"
    )
  ) {
    message.author.send("Du hast schon ein Ticket!");
  } else {
    const guild = message.guild;
    const rroll = guild.roles.find(r => r.name === "everyone");
    const role = guild.roles.find(r => r.name === "Supporter");
    let emb = new discord.RichEmbed()
      .setTitle("Ticket")
      .setThumbnail(
        "https://cdn.glitch.com/aa06e098-4b8a-4c1f-a407-bbad41aaeba4%2Ftake-your-invite.gif?v=1588904508090"
      )
      .setDescription(`ein ${role} wird grade gerufen`)
      .addField(
        `${bot.user.tag} ----> ${message.author.tag}`,
        "Bitte schreibe schonmal dein Anliegen hin"
      )
      .setColor("GREEN");
    guild
      .createChannel(message.author.username + "-s-ticket", {
        topic: `Ein ${role} kümmert sich gleich um dich! <@!${message.author.id}>`,
        type: "text",
        permissionOverwrites: [
          {
            allow: "VIEW_CHANNEL",
            id: message.author.id
          },
          {
            allow: "VIEW_CHANNEL",
            id: role.id
          },
          {
            allow: "SEND_MESSAGES",
            id: role.id
          },
          {
            deny: "VIEW_CHANNEL",
            id: guild.id
          }
        ]
      })
      .then(ch => {
        ch.send(emb)
        console.log("Erstellt! " + ch.name);
        message.reply("Dein Ticket wurde erstellt!");

        message.channel.send(`${role} kümmert euch um <@${message.author.id}>`);
        message.author.channel.send(emb)
        message.react("🎟");
      })
      .catch(err => console.log(err));
  }
};
