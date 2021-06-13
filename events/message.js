
const fivem = require("discord-fivem-api");
const config = require('../config.json')
const Discord = require('discord.js')
const client = new Discord.Client()
client.commands = new Discord.Collection();
const fs = require('fs')
set = new Set();
module.exports = (client, message) => {
if (!message.content.startsWith(config.prefix)) return;
    if (set.has(message.author.id)) {
    message.delete();
    return joeembed(`<@${message.author.id}>, Vent 3 sek`)
}
  set.add(message.author.id)

    function joeembed(args) {
        let embed = new Discord.MessageEmbed()
          .setDescription(args)
          .setColor("#fffff")
        message.channel.send({ embed: embed })
          .then(msg => {
            msg.delete(5000)
          })
        return;
      }
      setTimeout(() => {
        set.delete(message.author.id)
      }, 3000)
    
    
    if (message.author.bot) return;
    if (message.content.indexOf(config.prefix) !== 0) return;
  
    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    try {
      let commandFile = require(`../cmds/${command}.js`);

      commandFile.run(client, message, args, config);
    } catch (err) {
  
      joeembed("Undskyld Denne Command Findes ikke\n\n**Console**: ```js\n" + err + "```")
    }

}