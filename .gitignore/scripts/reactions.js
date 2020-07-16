const Discord = require('discord.js');
const clientDiscord = new Discord.Client();
const config = require('./config.json');

clientDiscord.on('message', function(message) {
    if (message.author.id === '686307161055166485') {
        message.react("💩")
    }
});

clientDiscord.login(process.env.TOKEN);
