const Discord = require('discord.js'); 
const db = require('megadb')
const bumps = new db.crearDB("canal_bump", "servers")
module.exports = {
    name: "setchannel",
    description: "Establece un canal de bumps",
    cooldown: 10,
    aliases: ["sc"],

    async execute(message, args, client) {
      if (!message.member.permissions.has('ADMINISTRATOR')) return message.channel.send('`❌ | Necesitas el permiso ADMINISTRADOR`').then(message => message.delete({ timeout: 5000 }));
if(bumps.tiene(message.guild.id)) return message.channel.send('`❌ | El sistema de bumps ya esta establecido en el servidor`')

const canal = message.mentions.channels.first() || message.channel
    if (canal.guild.id != message.guild.id) return message.reply("`❌ | El canal debe ser de este servidor`")
bumps.establecer(message.guild.id, canal.id)
const embed = new Discord.MessageEmbed()
.setDescription('`✅ | He establecido el canal de bumps correctamente a` <#'+canal.id+'>')
.setColor('GREEN')
message.channel.send(embed)
canal.send('`🚀 | Este sera el nuevo canal para bumps`')
    }
}