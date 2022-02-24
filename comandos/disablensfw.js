const Discord = require('discord.js'); 
const db = require('megadb')
const nsfws = new db.crearDB('nsfw', "bumps")


module.exports = {
    name: "disablensfw",
    description: "Elimina el servidor como NSFW",
    cooldown: 10,
    aliases: ["dnsfw"],

    async execute(message, args, client) {
          if (!message.member.permissions.has('ADMINISTRATOR')) return message.channel.send('`❌ | Necesitas el permiso ADMINISTRADOR`').then(message => message.delete({ timeout: 5000 }));
          if(nsfws.tiene(message.guild.id)) return message.channel.send('`❌ | El servidor no esta establecido como NSFW`')
          nsfws.eliminar(message.guild.id, message.guild.name)
          const embed2 = new Discord.MessageEmbed()
.setTitle('`🔞 NSFW Desactivado 🔞`')
.setDescription('El servidor ha sido desactivado como NSFW, para activarlo, utiliza el comando `setnsfw`')
.setFooter(`Bumper - NSFW Servers`)
message.channel.send(embed2)
    }
    }