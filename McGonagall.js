const Discord = require("discord.js");
const bot = new Discord.Client();
const token = 'Nzg0MDYzOTA3MDA2MTE5OTM3.X8j2ag.1txYKSj991tdBiaKIsEnIWiF9Qc';
const ms = require('ms');
const {Client, RichEmbed} = require('discord.js');

const fs = require('fs');
const { brotliCompressSync } = require("zlib");

bot.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    bot.commands.set(command.name, command);
}

bot.on('ready', () => {
    console.log('This bot is online!');
});

bot.on('message', msg => {
    const args = msg.toString().toLowerCase().split(' ');
    switch(args[0]){
        case 'help':
            bot.commands.get('help').execute(msg, args);
            break;
        default:
            bot.commands.get('chat').execute(msg, args);
            break;
    }
});

bot.login(token);