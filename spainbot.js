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
    var choices = ['too bad England’s not here to enjoy England not being here.','romano fill my files with your data!!!','I have a demon in me but we are friends :)','gay','crocs are comfy','h','romano is my fursona','gods greatest gift? a really good nap','https://78.media.tumblr.com/a95820eecb9bb22d56670ba02db10263/tumblr_pamtziwd6w1wn2otdo1_500.png','https://78.media.tumblr.com/13c731dd71417560193fdce346af4b3d/tumblr_p7z326jSCr1vdbx3no2_500.jpg','not to be dramatic or anything but I need affection or im gonna die','dame tu pasito','estoy erecto'];
    var response = Math.floor(Math.random() * choices.length);
    message.channel.send(choices[response]);
  } else

  if (message.content.toLowerCase().includes ('validate me')) {
    var choices = ['you are 100% valid! :sparkles:','you are doing great!!!','Boss is so proud of you!','currently sending you a virtual hug'];
    var response = Math.floor(Math.random() * choices.length);
    message.channel.send(choices[response]);
  } else

  if (message.content.toLowerCase().includes ('im lonely spainbot')) {
    var choices = ['Si besarte fuera pecado, caminaría feliz por el infierno','Si yo fuera azafata, te llevaría en mi avión, pero como no lo soy, te llevo en mi corazón','papi, si cocinas tal como te mueves, me comeré el menú completo','Mami, tú con tantas curvas y yo sin frenos','Papi, te ronca el mango, tú con tanta carne mientras yo paso hambre','Muñeca, ¿de qué juguetería te escapaste?','Sus labios se ven solitos, ¿querrían conocerse con los míos?','Ojalá la mitad de las estrellas brillaran tanto como tus ojos','Bonitas piernas, ¿A qué hora abren?','Si el agua fuese belleza, tú serías el océano entero','Si la belleza fuera delito, yo te hubiera dado cadena perpetua','Eres como un sol, sólo con acercarme a ti me derrito!','Ay! Tanta carnita sin papita'];
    var response = Math.floor(Math.random() * choices.length);
    message.channel.send(choices[response]);
  }
});

bot.on('message', message =>{
  if (message.content.toLowerCase().includes ('bless me papi')) {
    var choices = ['https://static.tumblr.com/b025f07a12362b4aae1a802b6b6e0c03/mgkkv4d/Qwmojjvw8/tumblr_static_92m8jatwq2w4ckwcwwk0o0o88.jpg'];
    var response = Math.floor(Math.random() * choices.length);
    message.channel.send(choices[response]);
  }
});

bot.on('message', message =>{
  if (message.content.toLowerCase().includes ("hi spainbot")) {
    message.channel.send("¡Hola!")
  } else

  if (message.content.toLowerCase().includes ("roma bot")) {
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

  if (message.content.toLowerCase().includes ("but you love me most, right toni?")) {
    message.channel.send("someone's jealous :sparkling_heart: of course I do cariño")
  } else

  if (message.content.toLowerCase().includes ("i love you too! :kissing_heart:")) {
    message.channel.send("what about meeeeeeeeeeee ??")
  } else

  if (message.content.toLowerCase().includes ("sorry, do i  know you?")) {
    message.channel.send("you certainly did last night")
  }

})

bot.login(NDU4Njg4NTU1NDE4NjQ4NTc2.DhPcCg.hYcUbt-DdOqaDSOMtCeucP1EchM);
