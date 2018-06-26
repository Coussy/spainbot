const botconfig = require("./botconfig.json");
const Discord = require("discord.js");

const bot = new Discord.Client({disableEveryone: true});

bot.on("ready",() => {
  console.log(`${bot.user.username} is online!`);
  bot.user.setActivity("Romano's sausage");
});

var http = require("http");
setInterval(function() {
   http.get("http://spainbot.herokuapp.com");
}, 900000);

bot.on('message', message =>{
  if (message.content.toLowerCase().includes ('porty')) {
    var choices = ['fish-breath','mom still likes me better','towel gangster'];
    var response = Math.floor(Math.random() * choices.length);
    message.channel.send(choices[response]);
  } else

  if (message.content.toLowerCase().includes ('fake!quote!')) {
    var choices = ['too bad England’s not here to enjoy England not being here.','romano fill my files with your data!!!','I have a demon in me but we are friends :)','gay','crocs are comfy','h','romano is my fursona'];
    var response = Math.floor(Math.random() * choices.length);
    message.channel.send(choices[response]);
  } else

  if (message.content.toLowerCase().includes ('validate me')) {
    var choices = ['you are 100% valid! :sparkles:','you are doing great!!!','Boss is so proud of you!','currently sending you a virtual hug'];
    var response = Math.floor(Math.random() * choices.length);
    message.channel.send(choices[response]);
  }
  
});

bot.on('message', message =>{
  if (message.content.toLowerCase().includes ("hi spainbot")) {
    message.channel.send("¡Hola!")
  } else

  if (message.content.toLowerCase().includes ("romabot")) {
    message.channel.send("you mispelled perfection :heart:")
  } else

  if (message.content.toLowerCase().includes ("amore")) {
    message.channel.send(":eyes: :heart:")
  } else

  if (message.content.toLowerCase().includes ("ily spainbot")) {
    message.channel.send("I LOVE YOU MORE!!!!! :two_hearts:")
  } else

  if (message.content.toLowerCase().includes ("olive oil")) {
    message.channel.send(":peanuts: :peanuts: :peanuts:")
  } else

  if (message.content.toLowerCase().includes ("hewwo")) {
    message.channel.send("uwu nya")
  } else

  if (message.content.toLowerCase().includes ("alfie bot")) {
    message.channel.send("that guy has knees of steel...")
  }

})

bot.login(NDU4Njg4NTU1NDE4NjQ4NTc2.DhPXGg.mHdwYjUzU_hkxiRSUoavevWnXBQ);
