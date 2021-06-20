const fivem = require("discord-fivem-api");
const { MessageEmbed } = require('discord.js')
module.exports.run = async (client, message, args, config) => {
    let role = `<@&${config.ledelseroleid}>`
    
    //dont judge me, magter ikke at import functions
    function joeembed(args) {
        let embed = new MessageEmbed()
          .setDescription(args)
          .setColor("#fffff")
        message.channel.send({ embed: embed })
      }
    
    
    if (message.channel.id !== config.ledelsesupportid) {
        joeembed(`Kan kun sendes i <#${config.supportid}>`)
    } else {
        let embed = new MessageEmbed()
        .addField(`Du har nu kontaktede Ledelse og de vil være der hurtigst mulig`, `Og Rolig nu de kommer omlidt...`)
        .setColor("#fffff")
        .setAuthor(message.author.username, message.author.displayURL)
        .setThumbnail(message.author.displayAvatarURL)
        message.channel.send(role + "I er blevet Kontaktet")
        .then(msg => {
            msg.delete(5000)
        })
        message.channel.send({ embed: embed })
        
    }




}