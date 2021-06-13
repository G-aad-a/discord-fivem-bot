
const config = require('../config.json')
const Discord = require("discord.js");

module.exports.run = (client, message, args) => {
  let help = 
  `${config.prefix}**Ban**
${config.prefix}**Kick**
${config.prefix}**Say**
${config.prefix}**Status**
${config.prefix}**Support**
${config.prefix}**Ledelse**
  `

    let embed = new Discord.MessageEmbed()
    .addField(help, `Lavet af ♥Gad♥#7870`)
    .setColor("#fffff")
    .setTimestamp()
    .setThumbnail(message.author.displayAvatarURL)

    message.channel.send(embed)

}