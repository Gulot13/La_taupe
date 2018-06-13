const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', message => {
	var msg = message.content.toLowerCase();
	if (msg === "taupe gun") {
		message.channel.sendMessage("https://media.giphy.com/media/l0MYF9lyLHvVBPiog/giphy.gif");
	}
	if (message.channel.id === "456502156439322624") {
		message.delete();
		console.log('supprimer')
		if (msg === "ok") {
			message.member.addRole(message.guild.roles.get("454327071531991045"));
		}
	}
});

client.login(TOKENHERE);
