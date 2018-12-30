const Discord = require('discord.js');
const clientDiscord = new Discord.Client();
const config = require('./config.json');
const PREFIX = "!c";

clientDiscord.on("guildMemberAdd", member => {
    let role = member.guild.roles.find("name", "Membres");
    member.guild.channels.find("name", "📢-accueil").send(` **${member.user.username}** vient de rejoindre le discord! :tada:`)
    member.addRole(role)
});

clientDiscord.on("guildMemberRemove", member => {
    member.guild.channels.find("name", "📢-accueil").send(` **${member.user.username}** vient de quitter le discord! :door:`)
})

clientDiscord.login(process.env.TOKEN);
