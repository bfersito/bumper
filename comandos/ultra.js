const Discord = require('discord.js'); 
const db = require('megadb')
const codes = new db.crearDB('ultra_codes')
const ultra = new db.crearDB('ultra', "servers")


module.exports = {
    name: "ultra",
    description: "Reclama codigo ultra",
    cooldown: 5,
    aliases: ["u"],

    async execute(message, args, client) {
            if (!message.member.permissions.has('ADMINISTRATOR')) return message.channel.send('`❌ | Necesitas el permiso ADMINISTRADOR`').then(message => message.delete({ timeout: 5000 }));
            
      if(!codes.tiene(message.author.id)) return message.channel.send('`❌ | No tienes ningun code ultra bajo tu poder`')
if(ultra.tiene(message.guild.id)) return message.channel.send('`❌ | Este servidor ya es ultra`')

if(!args[0]) return message.channel.send('🌠 | Para activar el __**ultra**__ en el servidor, utiliza el comando `b!ultra activar`')

if(args[0] === 'activar'){
  const canal = client.channels.cache.get('925786600271667230')
  codes.eliminar(message.author.id)
  ultra.establecer(message.guild.id, message.guild.name)
  message.channel.send('`✅ | Has reclamado tu ultra correctamente`') 
  const embed = new Discord.MessageEmbed()
  .setTitle('`🌠 ULTRA RECLAMADO 🌠`')
  .setDescription(`Un nuevo servidor ha reclamado ultra! Aqui debajo esta la informacion del mismo`)
  .addField('`🏡 - Servidor:`', message.guild.name)
  .addField('`👥 - Miembros:`', message.guild.memberCount)
  .addField('`👤 - Usuario:`', message.author.tag)
  .setColor('GREEN')
  .setThumbnail(message.guild.iconURL({ dynamic: true }))
  canal.send(embed)
  
                 }
    }
}