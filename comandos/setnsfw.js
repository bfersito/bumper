const Discord = require('discord.js'); 
const db = require('megadb')
const nsfws = new db.crearDB('nsfw', "bumps")


module.exports = {
    name: "setnsfw",
    description: "Establece el servidor como NSFW",
    cooldown: 10,
    aliases: ["snsfw"],

    async execute(message, args, client) {
          if (!message.member.permissions.has('ADMINISTRATOR')) return message.channel.send('`❌ | Necesitas el permiso ADMINISTRADOR`').then(message => message.delete({ timeout: 5000 }));
          if(nsfws.tiene(message.guild.id)) return message.channel.send('`❌ | El servidor ya esta establecido como NSFW`')
          nsfws.establecer(message.guild.id, message.guild.name)
          const embed2 = new Discord.MessageEmbed()
.setTitle('`🔞 NSFW Establecido 🔞`')
.setDescription('El servidor ha sido establecido como NSFW, para desactivarlo, utiliza el comando `disablensfw`')
.setFooter(`Bumper - NSFW Servers`)
message.channel.send(embed2)
    }
    }