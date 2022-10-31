//Make sure you configure leave.js too!
module.exports = (client) => {
    const channelId = "1035944845749006366";
    client.on("guildMemberAdd", (member) => {
        console.log(member)

        const message = `Hey <@${member.id}>, welcome to **Your server**!`;

        const channel = member.guild.channels.cache.get(channelId);
        channel.send(message);
    });
};
