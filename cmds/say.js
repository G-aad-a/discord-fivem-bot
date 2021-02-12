module.exports.run = async (client, message, args) => {
message.delete()

if (!message.member.hasPermission("ADMINISTRATOR")) return;
const ord = args.join(" ")
message.channel.send(ord)

}