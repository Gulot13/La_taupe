const Discord = require('discord.js');
const client = new Discord.Client();
const server = client.guilds.get("447117906141118464");

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', message => {
	if (message.content.startsWith("ok")) {
		if (message.channel.id === "456502156439322624"){
			message.member.addRole(message.guild.roles.get("454327071531991045"));
			message.delete();
		}
	}
});

client.login('NDU0Mjk5NzM1NTEyMDU1ODA4.Dfsv3g.qNoqVF0C8dM1iCBHbiwCAgJRkKc');
