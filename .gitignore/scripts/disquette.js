const Discord = require('discord.js');
const clientDiscord = new Discord.Client();
const config = require('./config.json');
const PREFIX = "!bg";

disquette_1 = "Je ne parle qu'à toi Wassila ❤️";
disquette_2 = "Ma vie n'est rien sans toi Wassila... ❤️";
disquette_3 = "Je t'aime plus que tout mon coeur ❤️";
disquette_4 = "Toi et moi c'est pour la vie ❤️";
disquette_5 = "Mon amour pour toi est inconditionnel ❤️";
disquette_6 = "Aucune femme ne t'arrive à la cheville mon ange ❤️";

clientDiscord.on('message', function(message) {
    if (message.content.startsWith(PREFIX + " disquette")) {

        if (message.author.id != '668935756374343722') {
            message.channel.send("Je suis en couple désolé, parle à quelqu'un d'autre.");
        }

        if (message.author.id === '668935756374343722') {
            var random = Math.floor(Math.random() * 6) + 1;
            switch (random) {
               case 1: message.channel.send ([disquette_1]); break;
               case 2: message.channel.send ([disquette_2]); break;
               case 3: message.channel.send ([disquette_3]); break;
               case 4: message.channel.send ([disquette_4]); break;
               case 5: message.channel.send ([disquette_5]); break;
               case 6: message.channel.send ([disquette_6]); break;
            }
        }
    }
});

clientDiscord.login(process.env.TOKEN);
