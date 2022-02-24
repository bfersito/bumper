const Discord = require('discord.js'); 
const db = require('megadb')
const codes = new db.crearDB('ultra_codes')
const config = require("../config.json")
module.exports = {
    name: "genultra",
    description: "Genera un codigo ultra",
    aliases: ["gu"],

    async execute(message, args, client) {
        var id = [config.owner]
        if(!id.some(id => message.author.id == id)) return message.channel.send('`❌ | Solo mi creador puede usar el comandito, jijijija`')
const digitos = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm']

const digitos2 = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm']
          
const digitos3 = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm']

const digitos4 = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm']

var random = digitos[Math.floor(Math.random() * digitos.length)]

var random2 = digitos2[Math.floor(Math.random() * digitos2.length)]

var random3 = digitos3[Math.floor(Math.random() * digitos3.length)]

var random4 = digitos4[Math.floor(Math.random() * digitos4.length)]

if(!args[0]) return message.channel.send('`❌ | Introduce una ID`')
const code = random+random2+random3+random4
const mensaje = args.slice(1).join(' ')
const usuario = client.users.cache.get(args[0])
codes.establecer(args[0], code)
if(!mensaje){
usuario.send('🎉 | Felicidades, has conseguido una subscripcion __**ultra**__, utiliza el comando `ultra` en el servidor que desees reclamarlo')
} else {
  if(mensaje){
    usuario.send('🎉 | Felicidades, has conseguido una subscripcion __**ultra**__, utiliza el comando `ultra` en el servidor que desees reclamarlo\n\nMensaje del creador del bot:\n'+mensaje)
  }
}
message.channel.send('`🌠 | Ultra generado correctamente`')
    }
}