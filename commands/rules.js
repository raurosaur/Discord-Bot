module.exports = {
    name : 'rules',
    description : 'Rule List',
    execute(msg, Discord){
        const emojiArr = ['784724572556623902', '784724572872114206',
            '784723987641008128', '784724576558383114',
            '784724568866029568', '784724569159499827',
            '784724572301819904', '784724569839370250',
            '784724570782957578', '784724570799603713',
            '785463606238117888', '785463607864721439'];
        const newEmbed = new Discord.MessageEmbed()
            .setColor('#0091AD')
            .setTitle('Information')
            .setDescription('general info')
            .addFields(
                { name: 'Welcome!', value: 'Click on this link for a short video on how to use the discord interface: https://youtu.be/TJ13BA3-NR4'},
                { name: '#great-hall', value: 'for any and all conversations.', inline: true },
                { name: '#library', value: 'to post pictures or videos of the day', inline: true },
                { name: '#Quidditch Pitch and #Forbidden Grounds', value: 'to play among us, with a 10 person limit'},
                { name: '#Grounds', value: 'for general voice/ video chats.'},
                { name: '1.', value: 'React to any one of the emoji below having no more than 2 people reacting, to choose your colours for Among Us gameplay.', inline: true},
                { name: '2.', value: 'This server allows you to change your nickname, and Discord allows you to change your username. Make either or both into the same one as that of you Among Us gameplay. Also change your profile picture to match your username, this would be helpful during voice chat.' },
                { name: '3.', value: 'Since we would be using voice instead of chat to play (also the reason, discord was recommended), you would need to switch on game overlay, this would help the voice call to remain as a bubble over the game allowing you to easily mute/unmute.' +
                        'The same could not be done using whatsapp, because Among Us is too finicky and if you try to pull down notification, it may disconnect you. Here is the link to switch on game overlay on Android : https://youtu.be/sAvQowAclNU. It is similar on PC but not available on iOS devices as of now.'},
            )
            .setFooter('Feel free to text on #great-hall and react on this message with the color you would be playing.');
        
        msg.channel.send({embed: newEmbed}).then(embedMessage => {
            for(let e of emojiArr)
                embedMessage.react(e);
        }).catch(console.error);
    }
}