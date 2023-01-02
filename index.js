const Discord = require("discord.js");
const welcome = require("./welcome")
const leave = require("./leave")
const client = new Discord.Client({intents: ["GUILDS", "GUILD_MESSAGES", "GUILD_PRESENCES", "GUILD_MEMBERS", "GUILD_MESSAGE_REACTIONS"]});

client.on("ready", () => {
    console.log("The bot is now online!", "Made by EndermanPvP#0001"/*You are not allowed to remove credits unless I say so in DMs*/);
    welcome(client);
    leave(client);
});

client.login("You bot token")
