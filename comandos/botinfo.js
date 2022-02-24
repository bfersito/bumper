const Discord = require('discord.js'); 
const db = require('megadb')


module.exports = {
    name: "botinfo",
    description: "Obtiene informacion del bot",
    cooldown: 10,
    aliases: ["bto"],

    async execute(message, args, client) {
        let Days = Math.floor(client.uptime / 86400000);
        let Hours = Math.floor(client.uptime / 3600000) % 24;
        let Minutes = Math.floor(client.uptime / 60000) % 60;
        let Seconds = Math.floor(client.uptime / 1000) % 60;

        const embed = new Discord.MessageEmbed()
        .setTitle(`📊 ESTADISTICAS DEL BOT 📊`)
        .addField(`👤 - Nombre:`, client.user.tag)
        .addField(`📍 - ID:`, client.user.id)
        .addField(`🏠 - Servidores:`, client.guilds.cache.size)
        .addField(`👥 - Usuarios:`, client.guilds.cache.reduce((fatand, fatandButGuild) => fatand + fatandButGuild.memberCount, 0))
        .addField(`🟢 - Ping:`, (Date.now() - message.createdTimestamp + `ms`))
        .addField(`⌛ - Uptime:`, `${Days}d ${Hours}h ${Minutes}m ${Seconds}s`)
        .setColor('GREEN')
        .setFooter(`Bumper - Estadisticas`)
        .setThumbnail(client.user.avatarURL({ dynamic: true }))
        message.channel.send(embed)
    }
}
