const Discord = require('discord.js'); 
const db = require("megadb")
let descripciones = new db.crearDB("descripciones", "bumps")
let footers = new db.crearDB("footers", "bumps")
let color = new db.crearDB("color", "bumps")
let nsfws = new db.crearDB("nsfw", "bumps")
let ultra = new db.crearDB("ultra", "servers")
let bumpeados = new db.crearDB("bumpeados", "servers")
let bump = new db.crearDB("canal_bump", "servers")

module.exports = {
    name: "bump",
    description: "Obtiene informacion del bot",
    aliases: [""],

    async execute(message, args, client) {
    let descripcion = await descripciones.obtener(message.guild.id);
        let color_custom = await color.obtener(message.guild.id);
    let footer_custom = await footers.obtener(message.guild.id);
     
    let desc;
    if(!descripciones.tiene(message.guild.id)){
      desc = '`๐ | No se ha establecido una descripcion`'
    }
    if(descripciones.tiene(message.guild.id)){
      desc = descripcion
    }
    
    let footer;
        if(!footers.tiene(message.guild.id)){
      footer = 'Bumper, by ะฒfะตะณ ุช'+" | https://bfer.ga/"
    }
    if(footers.tiene(message.guild.id)){
      footer = footer_custom
    }

    let ul;
    if(!ultra.tiene(message.guild.id)){
      ul = '`๐ช | Desactivado`'
    }
    if(ultra.tiene(message.guild.id)){
      ul = '`๐ | Activado`'
    }
  let cl;
    if(color.tiene(message.guild.id)){
       cl = `#${color_custom}`
    }
    if(!color.tiene(message.guild.id)){
      cl = `RANDOM`
    }
    let nw;
        if(!nsfws.tiene(message.guild.id)){
      nw = '`๐ | Falso`'
    }
    if(nsfws.tiene(message.guild.id)){
      nw = '`๐ | Verdadero`'
    }
    if(!bump_channels.tiene(message.guild.id)) return message.channel.send('`โ | El canal de bumps no esta establecido en este servidor`')
      if(bumpeados.tiene(message.guild.id)) return message.channel.send('`โ | El servidor ha sido bumpeado hace menos de 2 horas, intentalo mas tarde`')
      if(!bumpeados.tiene(message.guild.id)){
                  let invitenueva = message.channel;
        invitenueva.createInvite({ unique: false })
        .then(invite => {
        bumpeados.establecer(message.guild.id, message.guild.name)
        const embed = new Discord.MessageEmbed()
        .setTitle('๐ NUEVO BUMP ๐')
        .setDescription('๐?ใปNombre: '+message.guild.name+'\n๐ฅใปUsuarios: '+message.guild.memberCount+'\n๐?ใปUltra: '+ul+'\n๐ใปNSFW: '+nw+'\n\n๐ฐใปDescripcion: \n'+desc+`\n\n๐ใปInvitacion: [CLICK AQUI]( https://discord.gg/${invite.code})`)
        .setColor(color_custom)
        .setFooter(footer)
        .setThumbnail(message.guild.iconURL({ dynamic: true }))
client.guilds.cache.forEach(async g => {
    try {
        let bump_channels = await bump.obtener(g.id)
        client.channels.cache.get(bump_channels).send(embed)
    } catch(e) {
        return;
    }
})
        message.channel.send('`โ | Bumpeado correctamente`')
        setTimeout(async function(){
          bumpeados.eliminar(message.guild.id)
        }, 10000)
        })
      }
    }
  }