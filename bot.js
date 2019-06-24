const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get(""592519411978731533)
setInterval(function() {
channel.send(`3rbe 3rbe 3rbe 3rbe 3rbe`);
}, 30)
})

client.login(process.env.BOT_TOKEN);