const Discord = require("discord.js");
const bot = new Discord.Client();
const token = '/*There was a token here*/';
const ms = require('ms');
const fs = require('fs');
const { Recoverable } = require("repl");
bot.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
const emojiArr = ['784724572556623902', '784724572872114206', 
    '784723987641008128', '784724576558383114', 
    '784724568866029568', '784724569159499827',
    '784724572301819904', '784724569839370250',
    '784724570782957578', '784724570799603713',
    '785463606238117888', '785463607864721439'];
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    bot.commands.set(command.name, command);
}
bot.on('ready', () => {
    console.log('This bot is online!');
});

bot.on('guildMemberAdd', guildMember => {
    let welcomeRole = guildMember.guild.roles.cache.find(role => role.name === 'newbie');
    guildMember.roles.add(welcomeRole);
    guildMember.guild.channels.cache.get('784128445990961213')
    .send(`Welcome <@${guildMember.user.id}> to Hogwarts! Please proceed to \#rules and read the rules to access other rooms on the server.`);

    bot.commands.get('rules')
    .execute(guildMember.guild.channels.cache.get('785207141438717963'), Discord);
});

bot.on('messageReactionAdd', async (reaction , user) => {
    if(reaction.message.partial) await reaction.message.fetch();
    if(reaction.partial) await reaction.fetch();

    if(user.bot) return;
    if(!reaction.message.guild) return;

    if (reaction.message.channel.id === '785207141438717963'){
        if (reaction.emoji.name === '✅'){
           let member =  await reaction.guild.members.cache.get(user.id);
            member.roles.add('784406631051558933');
            member.roles.remove('784460572425977897');
        }
    }
});

bot.on('message', msg => {
    const args = msg.toString().toLowerCase().split(' ');
    if(args[0].startsWith('thank'))
        return msg.react('❤️').catch(console.error);
    switch(args[0]){
        case 'rule':
        case 'rules':
            bot.commands.get('rules').execute(msg, Discord);
            break;
        case 'help':
            bot.commands.get('help').execute(msg, args, Discord);
            break;
        default:
            return bot.commands.get('chat').execute(msg, args);
    }
});
bot.login(token); 
