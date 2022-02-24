const Discord = require('discord.js'); 
const db = require('megadb')

let descripciones = new db.crearDB("descripciones", "bumps")
let footers = new db.crearDB("footers", "bumps")
let color = new db.crearDB("color", "bumps")
let nsfws = new db.crearDB("nsfw", "bumps")
let ultra = new db.crearDB("ultra", "servers")
let bumpeados = new db.crearDB("bumpeados", "servers")
let bump = new db.crearDB("canal_bump", "servers")

module.exports = {
    name: "test",
    description: "Envia tu embed de bump",
    cooldown: 10,
    aliases: ["prueba"],

    async execute(message, args, client) {

      if (!message.member.permissions.has('ADMINISTRATOR')) return message.channel.send('`❌ | Necesitas el permiso ADMINISTRADOR`').then(message => message.delete({ timeout: 5000 }));
      
let descripcion = await descripciones.obtener(message.guild.id);
        let colorsito = await color.obtener(message.guild.id);
    let futersito = await footers.obtener(message.guild.id);
    let desc;
    if(!descripciones.tiene(message.guild.id)){
      desc = '`📌 | No se ha establecido una descripcion`'
    }
    if(descripciones.tiene(message.guild.id)){
      desc = descripcion
    }
    
    let foo;
        if(!footers.tiene(message.guild.id)){
      foo = 'Bumper, by вfег ت'+" | https://bfer.ga/"
    }
    if(footers.tiene(message.guild.id)){
      foo = futersito
    }

    let ul;
    if(!ultra.tiene(message.guild.id)){
      ul = '`🪔 | Desactivado`'
    }
    if(ultra.tiene(message.guild.id)){
      ul = '`🎉 | Activado`'
    }
  let cl;
    if(color.tiene(message.guild.id)){
       cl = `#${colorsito}`
    }
    if(!color.tiene(message.guild.id)){
      cl = `RANDOM`
    }
    let nw;
        if(!nsfws.tiene(message.guild.id)){
      nw = '`🔓 | Falso`'
    }
    if(nsfws.tiene(message.guild.id)){
      nw = '`🔐 | Verdadero`'
    }
  

        const embed = new Discord.MessageEmbed()
        .setTitle('🚀 NUEVO BUMP 🚀')
        .setDescription('🏠・Nombre: '+message.guild.name+'\n👥・Usuarios: '+message.guild.memberCount+'\n🌠・Ultra: '+ul+'\n🔞・NSFW: '+nw+'\n\n📰・Descripcion: \n'+desc+`\n\n🔗・Invitacion: [CLICK AQUI]( https://discord.gg/CBfw9ZfcCU)`)
        .setColor(cl)
        .setFooter(foo)
        .setThumbnail(message.guild.iconURL({ dynamic: true }))
        message.channel.send(embed)
        }
        }