const Discord = require('discord.js'); 
const db = require('megadb')
let descripciones = new db.crearDB('descripciones', "bumps")


module.exports = {
    name: "setdescription",
    description: "Establece una descripcion",
    cooldown: 10,
    aliases: ["sd"],

    async execute(message, args, client) {
      if (!message.member.permissions.has('ADMINISTRATOR')) return message.channel.send('`❌ | Necesitas el permiso ADMINISTRADOR`').then(message => message.delete({ timeout: 5000 }));
if(descripciones.tiene(message.guild.id)) return message.channel.send('`❌ | La descripcion ya esta establecida en este servidor`')
if(!args[0]) return message.channel.send('`❌ | Debes introducir un texto para descripcion`')
let descripcion = args.slice(0).join(' ')
descripciones.establecer(`${message.guild.id}`, descripcion)
const embed = new Discord.MessageEmbed()
.setDescription('`✅ | He establecido correctamente la descripcion`')
.setColor('GREEN')
message.channel.send(embed)
    }
}