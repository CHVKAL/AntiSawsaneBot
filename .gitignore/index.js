// DEPENDANCES
const Discord = require('discord.js');
const config = require('./scripts/config.json');
const scripts = require('./scripts/scripts.js');
require('events').EventEmitter.prototype._maxListeners = 1000;


// VARIABLES
const clientDiscord = new Discord.Client();
const PREFIX = "!bg";

// EVENEMENTS

clientDiscord.on('ready', () => {
    console.log("> initialisation du bot : OK!");
    clientDiscord.user.setActivity("aimer Wassila ❤️");
});


clientDiscord.login(process.env.TOKEN);
