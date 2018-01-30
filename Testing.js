const Discord = require('discord.js');
const bot = new Discord.Client();
const prefix = "--"

bot.on('message', message => {
    var guild = message.guild;
    var author = message.author;
    var args = message.content.split(' '); var g = " "; for(var i = 1; i < args.length; i++){ g = g+" "+args[i]; }
    if (message.content.startsWith(prefix + 'setplayingstatus')) {
        bot.user.setGame(g)
        var embed = new Discord.RichEmbed();
        if (message.author.bot) return;
        embed.setColor('BLUE');
        embed.setDescription("Playing status set to**" + g + "**");
      message.channel.send({embed});
    }
});

bot.on('message' , message => {                            
  var embed = new Discord.RichEmbed();   
  var puppy = ["https://i.ytimg.com/vi/VRiWE1l8KqI/maxresdefault.jpg", "http://barkingroyalty.com/wp-content/uploads/2015/12/cutest-puppies.jpg", "https://i.ytimg.com/vi/Ce7hJ24a8yM/maxresdefault.jpg", "https://i.ytimg.com/vi/HswVfWs7aIA/maxresdefault.jpg", "https://i.pinimg.com/736x/eb/5c/78/eb5c78657282a7c7715939aac4553dcb--google-search-yahoo-search.jpg", "https://www.candis.co.uk/wp-content/uploads/2015/03/22-24_tn.jpg", "https://i.ytimg.com/vi/3ggIHfwkIWM/maxresdefault.jpg", "https://img.buzzfeed.com/buzzfeed-static/static/2015-03/20/16/enhanced/webdr05/enhanced-30545-1426883395-12.jpg?downsize=715:*&output-format=auto&output-quality=auto", "http://www.petsworld.in/blog/wp-content/uploads/2014/09/running-cute-puppies.jpg", "http://dogsbarn.com/wp-content/uploads/2017/01/Chihuahua-.jpg", "http://www.lifewithdogs.tv/wp-content/uploads/2015/05/5.16.15-Cutest-Sleeping-Puppies5.jpg","https://cdn.discordapp.com/attachments/378324905692758047/395338342637502478/image.png"]
  if(message.content.toLowerCase() == prefix + "puppy"){
  embed.setColor("#ffffff")
  embed.setImage(puppy[Math.floor(Math.random() * (puppy.length - 1 + 1) + 1)])
  message.channel.send({embed});                                
}
});

bot.on('message' , message => {                            
  if(message.content.toLowerCase() == prefix + "ping"){
      message.channel.send(Math.round(bot.ping))
  }
});

bot.login(process.env.BOT_TOKEN)
