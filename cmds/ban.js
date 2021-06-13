const Discord = require("discord.js");
const client = new Discord.Client();

module.exports.run = async (client, message, args) => {
    if(message.channel.type === "dm") return;
        
        
        let messageArray = message.content.split(" ");
        let cmd = messageArray[0];

	if(!message.member.hasPermission("BAN_MEMBERS")) return message.reply("Du har ikke tilladelse til at bruge denne kommando.");
        let bUser = message.guild.member(message.mentions.members.first() || message.guild.members.get(args[0]));
        if(!bUser) return message.reply("Kunne ikke finde personen!");
        let bReason = args.join(" ").slice(22);
        if (!bReason) return message.reply("sig en grund for Bannede.");
        if(bUser.hasPermission("ADMINISTRATOR")) return message.channel.send("Denne person kan ikke blive banned!");
        

        let BanMessageEmbed = new Discord.MessageEmbed()
        .setDescription(`Bannede fra: **${message.guild.name}** af ${message.author}`)
        .setColor("#e56b00")
        .addField("Grund: ", bReason);
        try {
        bUser.send()
        } catch (err) {
            console.log("Bannede someone lol")
        }
        bUser.ban(bReason)
        
        

        let banEmbed = new Discord.MessageEmbed()
        .setDescription("bannede")
        .setColor("#e56b00")
        .addField("Bannede Bruger:", `${bUser} Med ID ${bUser.id}`)
        .addField("Bannede af:", `<@${message.author.id}> med ID ${message.author.id}` )
        .addField("bannede i:", message.channel)
        .addField("At:", message.createdAt)
        .addField("Reason", bReason);
        message.channel.send(banEmbed)

        

        
       
        

        

        return;
}