const Discord = require('discord.js'); 
const db = require('megadb')
const ultra = new db.crearDB('ultra', "servers")
const color = new db.crearDB('color', "bumps")


module.exports = {
    name: "setcolor",
    description: "Establece un color para el embed de tu servidor",
    cooldown: 10,
    aliases: ["sco"],

    async execute(message, args, client) {
if(!ultra.tiene(message.guild.id)) return message.channel.send('`❌ | Este servidor no es ultra`')
      if (!message.member.permissions.has('ADMINISTRATOR')) return message.channel.send('`❌ | Necesitas el permiso ADMINISTRADOR`').then(message => message.delete({ timeout: 5000 }));
if(color.tiene(message.guild.id)) return message.channel.send('`❌ | Ya hay un color establecido en este servidor`')

let azul = '0003FF'
let naranja = 'FF6800'
let violeta = 'D100FF'
let verde_claro = '00FF06'
let verde_oscuro = '12AD16'
let verde_agua = '00FF95'
let rojo = 'FF1700'
let rosa = 'FF00C5'
let amarillo = 'FFEB00'

let colores_totales = ["azul", "amarillo", "rojo", "naranja", "violeta", "verde_claro", "verde_oscuro", "verde_agua", "rosa"]

let colorsito;
if(args[0] === "azul"){
  colorsito = azul
  color.establecer(message.guild.id, azul)
}
if(args[0] === "naranja"){
  colorsito = naranja
  color.establecer(message.guild.id, naranja)
}
if(args[0] === "violeta"){
  colorsito = violeta
  color.establecer(message.guild.id, violeta)
}
if(args[0] === "verde_claro"){
  colorsito = verde_claro
  color.establecer(message.guild.id, verde_claro)
}
if(args[0] === "verde_agua"){
  colorsito = verde_agua
  color.establecer(message.guild.id, verde_agua)
}
if(args[0] === "verde_oscuro"){
  colorsito = verde_oscuro
  color.establecer(message.guild.id, verde_oscuro)
}
if(args[0] === "rojo"){
  colorsito = rojo
  color.establecer(message.guild.id, rojo)
}
if(args[0] === "rosa"){
  colorsito = rosa
  color.establecer(message.guild.id, rosa)
}
if(args[0] === "amarillo"){
  colorsito = amarillo
  color.establecer(message.guild.id, amarillo)
}

const embed = new Discord.MessageEmbed()
.setTitle('`🎨 COLORES DISPONIBLES 🎨`')
.setDescription('Esta es la lista de colores disponibles:\n\n`azul`\n`naranja`\n`violeta`\n`rojo`\n`verde_claro`\n`verde_oscuro`\n`verde_agua`\n`rosa`\n`amarillo`\n\nPara establecer un color de embed, deberas ejectutar el comando añadiendo el color tal y como se lo especifica arriba.\nEj: `b!setcolor verde_claro`')
.setColor(`ORANGE`)
.setFooter(`Bumper - Ultra`)
.setThumbnail(message.guild.iconURL({ dynamic: true }))
if(!args[0]) return message.channel.send(embed)

const embed2 = new Discord.MessageEmbed()
.setTitle('`🎨 COLOR ESTABLECIDO 🎨`')
.setDescription('El color de embed se ha establecido correctamente, se vera igual que el de este embed')
.setFooter(`Bumper - Ultra`)
.setColor(`#${colorsito}`)
message.channel.send(embed2)
    }
}