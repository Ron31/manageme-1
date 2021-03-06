const Discord = require("discord.js");

function sendHelp(config, bot, cmd, author, message) {
  let embed = new Discord.RichEmbed()
  .setTitle("ManageMe - Help")
  .setColor(config.mainColor)
  .setFooter(`${bot.user.username} ● ${cmd} ● Requested by ${author.tag}`)
  .setDescription(`Please use ${config.prefix}help <category> to see the commands`)
  .addField("Moderation", "View all moderation commands.")
  .addField("Economy", "View all economy commands.")
  .addField("Experience", "View all experience commands.")
  .addField("Developer", "View all commands only availible to developers of the bot.")
  .addField("Miscellaneous", "View all other commands.")
  return message.channel.send(embed);
}

function sendModeration(config, bot, cmd, author, message) {
  let embed = new Discord.RichEmbed()
  .setTitle("ManageMe - Moderation commands")
  .setColor(config.mainColor)
  .setFooter(`${bot.user.username} ● ${cmd} moderation ● Requested by ${author.tag}`)
  .addField("No commands", "There are currently no commands in this category")
  return message.channel.send(embed);
}
function sendEconomy(config, bot, cmd, author, message) {
  let embed = new Discord.RichEmbed()
  .setTitle("ManageMe - Economy commands")
  .setColor(config.mainColor)
  .setFooter(`${bot.user.username} ● ${cmd} economy ● Requested by ${author.tag}`)
  .addField("No commands", "There are currently no commands in this category")
  return message.channel.send(embed);
}
function sendExp(config, bot, cmd, author, message) {
  let embed = new Discord.RichEmbed()
  .setTitle("ManageMe - Experience commands")
  .setColor(config.mainColor)
  .setFooter(`${bot.user.username} ● ${cmd} experience ● Requested by ${author.tag}`)
  .addField("No commands", "There are currently no commands in this category")
  return message.channel.send(embed);
}
function sendBotDev(config, bot, cmd, author, message) {
  let embed = new Discord.RichEmbed()
  .setTitle("ManageMe - Bot developer commands")
  .setColor(config.mainColor)
  .setFooter(`${bot.user.username} ● ${cmd} developer ● Requested by ${author.tag}`)
  .addField("No commands", "There are currently no commands in this category")
  return message.channel.send(embed);
}
function sendMisc(config, bot, cmd, author, message) {
  let embed = new Discord.RichEmbed()
  .setTitle("ManageMe - Miscellaneous commands")
  .setColor(config.mainColor)
  .setFooter(`${bot.user.username} ● ${cmd} miscellaneous ● Requested by ${author.tag}`)
  .addField("No commands", "There are currently no commands in this category")
  return message.channel.send(embed);
}

module.exports.run = async (prefix, messageArray, cmd, bot, message, args, author, guild, config) => {
  if(args.length == 0) {
    return(sendHelp(config, bot, cmd, author, message))
  } else if(args.length == 1) {
    if(args[0] == "moderation" || args[0] == "mod") {
      return(sendModeration(config, bot, cmd, author, message))
    } else if(args[0] == "economy" || args[0] == "eco" || args[0] == "ec") {
      return(sendEconomy(config, bot, cmd, author, message))
    } else if(args[0] == "experience" || args[0] == "xp" || args[0] == "exp") {
      return(sendExp(config, bot, cmd, author, message))
    } else if(args[0] == "developer" || args[0] == "dev") {
      return(sendBotDev(config, bot, cmd, author, message))
    } else if(args[0] == "miscellaneous" || args[0] == "misc") {
      return(sendMisc(config, bot, cmd, author, message))
    } else {
      return(sendHelp(config, bot, cmd, author, message))
    }
  } else {
    return(sendHelp(config, bot, cmd, author, message))
  }
}

module.exports.help = {
  name: "help"
}
