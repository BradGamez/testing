const Discord = require('discord.js');
const bot = new Discord.Client();
const prefix = "-"

bot.on('message', message => {
    var guild = message.guild;
    var author = message.author;
    var args = message.content.split(' '); var g = " "; for(var i = 1; i < args.length; i++){ g = g+" "+args[i]; }
    if (message.content.startsWith(prefix + 'setplayingstatus')) {
        bot.user.setGame(g)
        var embed = new Discord.RichEmbed();
        if (message.author.bot) return;
        embed.setColor('BLUE');
        embed.setDescription("Playing status set to" + g);
      message.channel.send({embed});
    }
});


bot.login(process.env.BOT_TOKEN)
