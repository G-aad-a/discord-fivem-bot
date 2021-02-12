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
            
            client.user.setPresence({
                game:{
                  name: `${info.raw.clients}/${info.raw.sv_maxclients} I Byen`
                },
                status:'online'
              });
        }).catch((error) => {
            client.user.setPresence({
                game:{
                  name: `Ingen I Byen`
                },
                status:'online'
              })
            })
    }, 2000)

    console.log("READY --- " + client.user.tag)
}