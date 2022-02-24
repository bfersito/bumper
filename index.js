const Discord = require('discord.js')
const { Client, Collection } = require('discord.js')
const client = new Discord.Client()
const ms = require('ms')
const db = require('megadb')
const {  } = require("path");
const { readdirSync } = require("fs")
const fs = require('fs')
const os = require('os')
client.commands = new Collection();
client.queue = new Map();
client.snipes = new Map();
client.editsnipes = new Map();
const cooldowns = new Collection();
const escapeRegex = (str) => str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
require('dotenv').config();
const bfer = 'вfег ت 🎄'
let prefixs = new db.crearDB("prefixs", "servers");


require('http')
	.createServer((req, res) => res.end(`¡El bot esta online como: SaferBot`))
	.listen(3000);


for (const file of readdirSync('./comandos/')) { 
  if (file.endsWith(".js")) { 
  let fileName = file.substring(0, file.length - 3); 
  let fileContents = require(`./comandos/${file}`); 
  client.commands.set(fileName, fileContents);
  var d = new Date();
  console.log(`💎  -> ·${fileName}· Cargado ✔️  [${d.getMilliseconds()}ms]`)
  }
} 


client.once("ready", () => {
    console.log(`🟢  -> Bot online como ${client.user.tag} y activo en ${client.guilds.cache.size} servidores. Observando a ${client.users.cache.size} usuarios`)
      setInterval(function (){
    var status = [`👥 ${client.guilds.cache.reduce((fatand, fatandButGuild) => fatand + fatandButGuild.memberCount, 0)} usuarios 👥`, `📁 ${client.guilds.cache.size} servidores 📁`, `🚀 Utiliza b!bump 🚀`, `🔩  Prefix: b! 🔩`]
  var randomStatus = Math.floor(Math.random()*(status.length));
  client.user.setPresence({
       status: "dnd",
       activity: {
           name: status[randomStatus],
           type: "WATCHING"
       }
   });
}, 5000);
})



client.on("message", async (message) => {
      let pre = await prefixs.obtener(message.guild.id);
      let prefixaso;
      if(prefixs.tiene(message.guild.id)){
        prefixaso = pre
      }
      if(!prefixs.tiene(message.guild.id)){
        prefixaso = 'b!'
      }
  let PREFIX = prefixaso

    if (message.author.bot) return;
    if (!message.guild) return;
    const prefixRegex = new RegExp(`^(<@!?${client.user.id}>|${escapeRegex(PREFIX)})\\s*`);
    if (!prefixRegex.test(message.content)) return;

    const [, matchedPrefix] = message.content.match(prefixRegex);

    const args = message.content.slice(matchedPrefix.length).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();
    const command =
      client.commands.get(commandName) ||
      client.commands.find((cmd) => cmd.aliases && cmd.aliases.includes(commandName));
    if(message.content === 'b!') return;
    
    if (!cooldowns.has(command.name)) {
      cooldowns.set(command.name, new Collection());
    }


    const now = Date.now();
    const timestamps = cooldowns.get(command.name);
    const cooldownAmount = (command.cooldown || 1) * 1000;

    if (timestamps.has(message.guild.id)) {
      const expirationTime = timestamps.get(message.guild.id) + cooldownAmount;

      if (now < expirationTime) {
        const timeLeft = (expirationTime - now) / 1000;
        return message.reply(
          '`❌ | Tienes que esperar `'+timeLeft.toFixed(1)+'`segundos para volver a usar el comando `'+command.name
        );
      }
    }

    timestamps.set(message.guild.id, now);
    setTimeout(() => timestamps.delete(message.guild.id), cooldownAmount);

    try {
      command.execute(message, args, client);
    } catch (error) {
      console.error(error);
      message.reply("`❌ | Ha ocurrido un error a el usar ese comando`").catch(console.error);
    }
});





client.on('guildCreate', async guild => {
  const channel = client.channels.cache.get('925598546361729054')
  const embed = new Discord.MessageEmbed()
  .setTitle(`✨ - Nuevo server`)
  .addField(`🏠 - Nombre:`, guild.name)
    .addField(`📍 - ID:`, guild.id)
  .addField(`👥 - Miembros:`, guild.memberCount)
  .addField(`👑 - Owner:`, guild.owner)
  .setColor('GREEN')
  .setThumbnail(guild.iconURL({ dynamic: true }))
  channel.send(embed)
})

client.on('guildDelete', async guild => {
  const channel = client.channels.cache.get('925598546361729054')
  const embed = new Discord.MessageEmbed()
  .setTitle(`🧨 - Eliminado de un server`)
  .addField(`🏠 - Nombre:`, guild.name)
  .addField(`📍 - ID:`, guild.id)
  .addField(`👥 - Miembros:`, guild.memberCount)
  .addField(`👑 - Owner:`, guild.owner)
  .setColor('RED')
  .setThumbnail(guild.iconURL({ dynamic: true }))
  channel.send(embed)
})


client.login(config.token)
