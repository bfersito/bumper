const Discord = require('discord.js'); 


module.exports = {
    name: "help",
    description: "Comando de ayuda",
    cooldown: 10,
    aliases: ["ayuda"],

    async execute(message, args, client) {

const inicio = new Discord.MessageEmbed()
.setTitle(`π MENU DE AYUDA π`)
.setDescription('Selecciona la categoria de comandos que deseas ver\n\n`π - Bumps`\n`π  - Ultra`\n`π­ - Generales`\n`π - Developer`\n`π - Menu de Inicio`')
.setFooter(`Bumper`)
.setColor(`ORANGE`)
.setThumbnail(message.guild.iconURL({ dynamic: true }))

const bumps = new Discord.MessageEmbed()
.setTitle(`π COMANDOS DE BUMPS π`)
.setDescription('`bump` - Bumpea el servidor\n`setchannel` - Establece el canal de bumps\n`disable` - Desactiva los bumps en el servidor\n`setdescription` - Establece una descripcion para el servidor\n`deletedescription` - Elimina la descripcion del servidor\n`setnsfw` - Establece el servidor como NSFW\n`disablensfw` - Elimina el servidor de la lista NSFW')
.setFooter(`Bumper`)
.setColor('BLUE')

const ultra = new Discord.MessageEmbed()
.setTitle(`π  COMANDOS ULTRA π `)
.setDescription('`ultra` - Reclama ultra en un servidor\n`setcolor` - Establece un color para el embed\n`deletecolor` - Desactiva el sistema de colores, establece el color por defecto\n`setfooter` - Establece un footer para el embed\n`deletefooter` - Elimina el footer del embed, vuelve al por defecto')
.setColor('YELLOW')
.setFooter('Bumper')

const developer = new Discord.MessageEmbed()
.setTitle(`π COMANDOS DEL DESARROLLADOR π`)
.setDescription('`genultra` - Genera un codigo ultra\n`blacklist` - AΓ±ade/elimina un servidor de la blacklist')
.setColor('GREEN')
.setFooter('Bumper')

const generales = new Discord.MessageEmbed()
.setTitle(`π­ COMANDOS GENERALES π­`)
.setDescription('`botinfo` - Obtiene informacion del bot\n`help` - El mensaje de ayuda\n`invite` - Consigue la invitacion del bot\n`setprefix` - Establece un prefix para el servidor\n`apelar` - Apela la blacklist de tu servidor\n`test` - Envia en el canal tu embed de bump')
.setColor('PURPLE')
.setFooter('Bumper')


message.channel.send(inicio).then(m => {
  m.react('π')
  m.react(`π `)
  m.react(`π­`)
  m.react(`π`)
  m.react(`π`)
   m.awaitReactions((reaction, user) => {
                  if (message.author.id !== user.id || user.bot) return;
          if(reaction.emoji.name === 'π') {
            reaction.users.remove(user.id)
        m.edit(bumps);
      }
          if(reaction.emoji.name === 'π ') {
            reaction.users.remove(user.id)
        m.edit(ultra);
      }
          if(reaction.emoji.name === 'π­') {
            reaction.users.remove(user.id)
        m.edit(generales);
      }
          if(reaction.emoji.name === 'π') {
            reaction.users.remove(user.id)
        m.edit(developer);
      }
          if(reaction.emoji.name === 'π') {
            reaction.users.remove(user.id)
        m.edit(inicio);
      }

    })
})
    }
}