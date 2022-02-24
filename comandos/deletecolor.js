const Discord = require('discord.js'); 
const db = require('megadb')
const ultra = new db.crearDB('ultra', "servers")
const color = new db.crearDB('color', "bumps")

module.exports = {
    name: "deletecolor",
    description: "Desactiva el color custom",
    cooldown: 10,
    aliases: ["dco"],

    async execute(message, args, client) {
if(!ultra.tiene(message.guild.id)) return message.channel.send('`❌ | Este servidor no es ultra`')
      if (!message.member.permissions.has('ADMINISTRATOR')) return message.channel.send('`❌ | Necesitas el permiso ADMINISTRADOR`').then(message => message.delete({ timeout: 5000 }));
if(!color.tiene(message.guild.id)) return message.channel.send('`❌ | No hay un color establecido en este servidor`')
color.eliminar(message.guild.id)
message.channel.send('`✅ | Se ha desactivado el color custom en este servidor`')
    }
}