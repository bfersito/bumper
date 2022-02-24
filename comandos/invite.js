const Discord = require('discord.js'); 


module.exports = {
    name: "invite",
    description: "Consigue la invite del bot",
    cooldown: 10,
    aliases: ["i"],

    async execute(message, args, client) {
const embed = new Discord.MessageEmbed()
.setDescription('Wow! Veo que quieres invitarme, aqui te dejo los links para hacerlo\n\n`🔗 - Link directo:` [CLICK AQUI](https://discord.com/oauth2/authorize?client_id=924874529619214347&scope=bot&permissions=8)\n`🏡 - Soporte:` [CLICK AQUI](https://discord.gg/kFsct9eDxQ)')
.setColor(`GREEN`)
.setFooter(`Te quiero <3`)
message.channel.send(embed)
    }
}