const Discord = require('discord.js'); 
const db = require('megadb')
let ultra = new db.crearDB("ultra", "servers")
let footers = new db.crearDB("footers", "bumps")

module.exports = {
    name: "deletefooter",
    description: "Elimina el footer",
    cooldown: 10,
    aliases: ["df"],

    async execute(message, args, client) {
    if(!ultra.tiene(message.guild.id)) return message.channel.send('`❌ | Este servidor no es ultra`')
      if (!message.member.permissions.has('ADMINISTRATOR')) return message.channel.send('`❌ | Necesitas el permiso ADMINISTRADOR`').then(message => message.delete({ timeout: 5000 }));
if(!footers.tiene(message.guild.id)) return message.channel.send('`❌ | El footer no esta establecido en este servidor`')
footers.eliminar(`${message.guild.id}`)
const embed = new Discord.MessageEmbed()
.setDescription('`✅ | He eliminado correctamente el footer`')
.setColor('GREEN')
message.channel.send(embed)
    }
}