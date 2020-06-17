const Discord = require('discord.js');
const clientDiscord = new Discord.Client();
const config = require('./config.json');

clientDiscord.on('message', function(message) {
    if (message.author.id === '668935756374343722') {
        message.react("❤️")
    }
});

clientDiscord.login("NzIyODA3OTEzNzg1MzI3NjU2.Xuodow.PIzwJDa0R-4qLXnvX5XAzcHKULI");