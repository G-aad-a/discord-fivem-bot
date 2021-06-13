const dig = require("gamedig");
const { MessageEmbed } = require('discord.js')
module.exports.run = async (client, message, args, config) => {

    

    await message.delete();
        return dig.query({
            type: 'fivem',
            host: config.ip,
            port: config.port,
            socketTimeout: 5000,
            udpTimeout: 10000
        }).then((info) => {
            const embed = new MessageEmbed()
                .setAuthor(info.raw.name)
                .setColor("RANDOM")
                .addField(`Password beskyttet?`, info.password, true)
                .addField(`Online`, `${info.raw.clients}/${info.raw.sv_maxclients}`, true)
                .addField(`Connect Ip`, `${config.ip}:${config.port}`)
                .setThumbnail(client.user.displayAvatarURL)
            message.channel.send(embed)
        }).catch((error) => {
            message.reply(`det ser ud som at servern er **offline!**`)

    })
}