const Discord = require('discord.js'); 
const db = require('megadb')
let ultra = new db.crearDB("ultra", "servers")
let footers = new db.crearDB("footers", "bumps")
module.exports = {
    name: "setfooter",
    description: "Establece un footer",
    cooldown: 10,
    aliases: ["sf"],

    async execute(message, args, client) {
    if(!ultra.tiene(message.guild.id)) return message.channel.send('`❌ | Este servidor no es ultra`')
      if (!message.member.permissions.has('ADMINISTRATOR')) return message.channel.send('`❌ | Necesitas el permiso ADMINISTRADOR`').then(message => message.delete({ timeout: 5000 }));
if(footers.tiene(message.guild.id)) return message.channel.send('`❌ | El footer ya esta establecido en este servidor`')
if(!args[0]) return message.channel.send('`❌ | Debes introducir un texto para el footer`')
let footer = args.slice(0).join(' ')
footers.establecer(`${message.guild.id}`, footer)
const embed = new Discord.MessageEmbed()
.setDescription('`✅ | He establecido correctamente el footer`')
.setColor('GREEN')
message.channel.send(embed)
    }
}