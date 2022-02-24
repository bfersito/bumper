const Discord = require('discord.js');
const db = require('megadb');

const prefixs = new db.crearDB("prefixs", "servers");


module.exports = {
    name: "setprefix",
    description: "Establece un prefix",
    cooldown: 10,
    aliases: ["sp"],

    async execute(message, args, client) {
      if (!message.member.permissions.has('ADMINISTRATOR')) return message.channel.send('`❌ | Necesitas el permiso ADMINISTRADOR`').then(message => message.delete({ timeout: 5000 }));


const prefixNuevo = args.join(" ")

  if(!prefixNuevo) return message.reply("`❌ | No definiste mi nuevo prefix`")

if(args[1]) return message.reply("`❌ | El prefix no puede contener espacios`")
        if(prefixNuevo.length > 3) {
            return message.channel.send('`❌ | Introduce como maximo 3 caracteres`')
            }

await prefixs.establecer(`${message.guild.id}`, prefixNuevo)

  await message.reply(`🔩 | Mi nuevo prefix es: **${prefixNuevo}**`)
}
}