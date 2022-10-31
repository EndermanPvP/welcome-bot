//Make sure you configure welcome.js too!
module.exports = (client) => {
    const channelId = "1035944845749006366";
    client.on("guildMemberRemove", (member) => {
        console.log(member)

        const message = `**${member.user.tag}** just left the server.`;

        const channel = member.guild.channels.cache.get(channelId);
        channel.send(message);
    });
};
