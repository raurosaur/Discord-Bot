const Discord = require("discord.js");
const bot = new Discord.Client();
const token = 'Nzg0MDc5NTI2NDU2MDY2MTA4.X8kE9g.O9Yj_qMh38zV5s1JjADzGEI3vfw';

bot.on('ready', () => {
    console.log('This bot is online!');
});

bot.on('message', msg => {
    const args = msg.content.split(" ");
    switch(args[0]){
        case 'Arre':
        case 'Arrey':
        case 'Wait':
        case 'Bara':
        case 'Arey':
            msg.reply('Shutiye laal kore debo');
            break;
    }
});

bot.login(token);