module.exports = (client) => {
    const channelId = "1028259400609189948";
    client.on("guildMemberAdd", (member) => {
        console.log(member)

        const message = `Hey <@${member.id}>, welcome to **Your server**!`;//Edit the messages in ./leave.js too!

        const channel = member.guild.channels.cache.get(channelId);
        channel.send(message);
    });
};
