
module.exports = {
    name : 'help',
    execute(msg, args, Discord){
        help(msg, args, Discord);
    }
};
function help(msg, args, Discord) {
    const emb = new Discord.MessageEmbed()
        .setColor('#6053E7');
    emb.description = 'Please tell me what happened?';
    emb.title = 'Help Needed';
    msg.author.send(emb);

    switch (args[0]) {
        default:
            const id  = msg.guild.ownerID;
            const user = msg.users.cache.get(`${id}`); 
            user.send('Help needed, contact user: ' + msg.author.username
            + '\n' + msg).catch(console.error());
            return msg.author
            .send('The Headmaster will contact you shortly!');
            break;
    }
             
};