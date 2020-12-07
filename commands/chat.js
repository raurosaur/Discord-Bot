
module.exports = {
    name : 'chat',
    description: 'General conversations',
    execute(msg, args){
        switch (args[0]) {
            case 'hello':
            case 'hi':
                return msg.reply('How are you?');
            case 'ki':
                if (args[1] === 're')
                    msg.channel.send('Yes?');
                break;
            case 'delete':
                if (msg.member.roles.cache.has('784135471721742356'))
                    if(!args[1])
                        msg.channel.bulkDelete(100);
                    else 
                        msg.channel.bulkDelete(args[1] + 1).catch(console.error);
                else 
                    msg.reply('Sorry, you\'re not allowed');
                break;
            case 'getid':
                if (msg.member.roles.cache.has('784135471721742356'))
                    msg.channel.send(msg.channel.id.toString());
                else
                    msg.reply('Sorry, you\'re not allowed');
                break;
            case 'bye':
                msg.reply('Have a Nice Day!');
                break;
        }
        if (args[0] === 'shutiye' || args[1] === 'shutiye' || args[2] === 'shutiye')
            msg.reply('Who the hell are you?');
    }
}