const Discord = require('discord.js'); 
const db = require('megadb')
let descripciones = new db.crearDB('descripciones', "bumps")


module.exports = {
    name: "deletedescription",
    description: "Elimina la descripcion",
    cooldown: 10,
    aliases: ["dd"],

    async execute(message, args, client) {
      if (!message.member.permissions.has('ADMINISTRATOR')) return message.channel.send('`❌ | Necesitas el permiso ADMINISTRADOR`').then(message => message.delete({ timeout: 5000 }));
if(!descripciones.tiene(message.guild.id)) return message.channel.send('`❌ | No hay una descripcion establecida en este servidor`')

descripciones.eliminar(message.guild.id)
const embed = new Discord.MessageEmbed()
.setDescription('`✅ | He eliminado correctamente la descripcion`')
.setColor('GREEN')
message.channel.send(embed)
    }
}
