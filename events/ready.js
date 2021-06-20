const { Console } = require("console");
const dig = require('gamedig')
const config = require('../config.json')
module.exports = (client, message, args) => {

    setInterval(() => {
        return dig.query({
            type: 'fivem',
            host: config.ip,
            port: config.port
        }).then((info) => {
            
          client.user.setActivity(`${info.raw.clients}/${info.raw.sv_maxclients} I Byen`, { type: 'WATCHING' });
        
        }).catch((error) => {
          client.user.setActivity(`Ingen I Byen`, { type: 'WATCHING' });
            })
    }, 2000)

    console.log("READY --- " + client.user.tag)
}