const Discord = require("discord.js");
const welcome = require("./welcome")
const leave = require("./leave")
const client = new Discord.Client({intents: ["GUILDS", "GUILD_MESSAGES", "GUILD_PRESENCES", "GUILD_MEMBERS", "GUILD_MESSAGE_REACTIONS"]});

client.on("ready", () => {
    console.log("The but is now online!", "Bot made by https://github.com/EndermanPvP"/*Do not remove credits*/);
    welcome(client);
    bye(client);
});

client.login("You bot token")
