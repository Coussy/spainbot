const botconfig = require("./botconfig.json");
const Discord = require("discord.js");

const bot = new Discord.Client({disableEveryone: true});

bot.on("ready", async () => {
  console.log(`${bot.user.username} is online!`);
  bot.user.setGame("Romano's sausage");
});

var http = require("http");
setInterval(function() {
    http.get("http://spainbot.herokuapp.com/%22);
}, 900000);

bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  let messageArray =message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

  if(cmd === `hello`){
    return message.channel.send("Hola!");
  }

});

bot.login(botconfig.token);
