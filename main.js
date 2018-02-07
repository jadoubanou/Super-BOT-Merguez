const Discord = require('discord.js');

var bot = new Discord.Client();
var prefix = ('/');
var randnum = 0;
var dispatcher;

bot.on('ready', function(){
    bot.user.setPresence({ game: { name: '[/help] Bot Privé', type: 0}});
    console.log('Bot Ready !');
});

bot.on('message', message =>{
    if (message.content === prefix + 'ping'){
        message.reply('pong')
        console.log('ping pong')
    }
    if(message.content === prefix + 'help'){
        message.author.sendMessage("Voi ci les commandes du bot :\n- /help : Sert à envoyé un message privé avec toutes les commandes du bot .\n- /nouvelles : Sert à demander au bot si il va bien .\n- /ping : Sert à faire un ping pong .x²")
        message.reply("Les commandes du bot viennent de t'être envoyées par message privé .")
        console.log('Commande help demandée')
    }
    if (message.content === prefix + 'nouvelles'){
        random();
        if (randnum == 0){
            message.reply('0Tranquille, je ma balade dans mon code.');
            console.log('0 :Tranquille, je ma balade dans mon code.');
        }
        if (randnum == 1){
            message.reply('1Très bien et toi ?');
            console.log('1 :Très bien et toi ?');
        }
        if (randnum == 2){
            message.reply('2Je suis actuellement content !');
            console.log('2 :Je suis actuellement content !');
        }
        if (randnum == 3){
            message.reply('3Je vais super bien, merci de me le demander !');
            console.log('3 :Je vais super bien, merci de me le demander !');
        }
    }
});

bot.login(process.env.TOKEN);

function random(min, max) {
    min = Math.ceil(0);
    max = Math.floor(3);
    randnum = Math.floor(Math.random() * (max - min +1) + min);
}
