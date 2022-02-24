const Discord = require('discord.js'); 
const db = require('megadb')
const cans = new db.crearDB('canal_bump', "servers")


module.exports = {
    name: "disable",
    description: "Desactiva el sistema de bumps",
    cooldown: 10,
    aliases: ["d"],

    async execute(message, args, client) {
            if (!message.member.permissions.has('ADMINISTRATOR')) return message.channel.send('`❌ | Necesitas el permiso ADMINISTRADOR`').then(message => message.delete({ timeout: 5000 }));
if(!cans.tiene(message.guild.id)) return message.channel.send('`❌ | El sistema de bumps no esta establecido en este servidor`')
bumps.eliminar(message.guild.id)

message.channel.send('`✅ | He desactivado el sistema de bumps`')
    }
}