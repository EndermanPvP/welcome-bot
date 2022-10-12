module.exports = (client) => {
    const channelId = "1028259400609189948";
    client.on("guildMemberRemove", (member) => {
        console.log(member)

        const message = `**${member.user.tag}** just left the server.`;

        const channel = member.guild.channels.cache.get(channelId);
        channel.send(message);
    });
};