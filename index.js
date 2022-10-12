const Discord = require("discord.js");
const welcome = require("./welcome")
const leave = require("./leave")
const client = new Discord.Client({intents: ["GUILDS", "GUILD_MESSAGES", "GUILD_PRESENCES", "GUILD_MEMBERS", "GUILD_MESSAGE_REACTIONS"]});

client.on("ready", () => {
    console.log("The bot is now online.");
    client.user.setPresence({
        status: "dnd",
        game: {	
            name: "you",
            type: "WATCHING"
        }
    });
    welcome(client);
    leave(client);
});

client.login("MTAyOTAzNjMwMjUyMTM0NDEzMQ.GnMra0.5I_lSJ9NBDGATlpygSMgxAvuX93XnOuPkjbVHM")