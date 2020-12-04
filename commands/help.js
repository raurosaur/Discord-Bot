
module.exports = {
    name : 'help',
    execute(msg, args){
        help(msg, args);
    }
};
const Discord = require('discord.js');

function help(msg, args) {
    const emb = new Discord.MessageEmbed()
        .setColor('#6053E7');
    emb.description = 'Please tell me what happened?';
    emb.title = 'Help Needed';
    msg.author.send(emb);

    switch (args[0]) {
        case 'rule':
        case 'rules':
            msg.author.send('Rules');
            break;
        default:
            msg.users.get('Dumbledore')
                .send('Help needed, contact user: ' + msg.author.username
                    + '\n' + msg);
            return msg.author
                .send('The Headmaster will contact you shortly!');
            break;
    }
   
};