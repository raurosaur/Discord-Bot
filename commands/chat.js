
module.exports = {
    name : 'chat',
    description: 'General conversations',
    execute(msg, args){
        switch (args[0]) {
            case 'hello':
            case 'hi':
                msg.reply('How are you?');
                break;
            case 'ki':
                if (args[1] === 're')
                    msg.channel.send('Yes?');
                break;
            case '#delete':
                msg.channel.bulkDelete(100);
                break;
            case 'bye':
                msg.reply('Have a Nice Day!');
        }
        if (args[0] === 'shutiye' || args[1] === 'shutiye' || args[2] === 'shutiye')
            msg.reply('Who the hell are you?');
    }
}