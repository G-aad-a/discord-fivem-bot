const Discord = require('discord.js')
const client = new Discord.Client()
const config = require('./config.json')
commands = new Discord.Collection();
const fs = require('fs')
set = new Set();

fs.readdir('./events', async (err, file1 ) => { 
    if (err) return console.error;
    file1.forEach(file => { 
        if(!file.endsWith('.js')) return; 
        const evt = require(`./events/${file}`);
        let evtName = file.split('.')[0]; 
        console.log(`Loaded event:  ${evtName}.`); 
        client.on(evtName, evt.bind(null, client));
    })

})

client.login(config.token)