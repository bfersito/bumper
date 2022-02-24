const { MessageEmbed } = require("discord.js");
const Discord = require("discord.js");
const Hastebin = require("hastebin-save");
const config = require("../config.json")

module.exports = {
  name: "eval",
  aliases: ["e"],
  description: "Ejecuta codigos.",
    uso: "eval 1+1",
async execute(message, args, client) {

    var id = [config.owner]
    if(!id.some(id => message.author.id == id)) return message.channel.send('`❌ | Solo mi creador puede utilizar este comando, jijijija`')

    // funciones que puedes llamar cuando evaluas (no son necesarias pero pueden ser utiles)



        async function exec(codigo) {
        return await require("child_process").execSync(codigo)
        }
    // Puedes poner mas funciones, son solo ejemplos
    
    
    
    // Esta funcion es necesaria para que el tipo aparezca con la letra mayuscula para que discord le de color
    
    
        function mayuscula(string) {
            string = string.replace(/[^a-z]/gi, '')
            return string[0].toUpperCase()+string.slice(1)
        }
    
    // Este sera el tiempo que luego le restaremos a Date.now() para obtener los milisegundos que tardo en hacer el eval
        let tiempo1 = Date.now()
    
    
    // Este mensaje saldra primero y se editara cuando termine de hacer el eval
        const edit = new Discord.MessageEmbed()
        .setDescription(":stopwatch: Evaluando...")
        .setColor("#7289DA")
        message.channel.send(edit).then(async msg => { 
            try {
              let code = args.join(" ");
              let evalued = await eval(code);
              let tipo = typeof evalued||"Tipo no encontrado."
              if (typeof evalued !== 'string') evalued = require('util').inspect(evalued, { depth: 0, maxStringLength: 2000});
              let txt = "" + evalued;
    
    // Si el texto es mas grande que 1500 (ajustarlo a medida), el bot enviara un link con el codigo posteado en hastebin para que pueda ser del tamano que sea
    
              if (txt.length > 1500) {

                Hastebin.upload(`- - - - Eval - - - -\n\n${txt.replace(client.token, "Wow, un token")}`, link => {
            
                const embed = new Discord.MessageEmbed()
                .addField(":inbox_tray: Entrada", `\`\`\`js\n${code}\n\`\`\``)
                .addField(":outbox_tray: Salida", `\`El codigo es muy largo, link:\` https://hastebin.com/${link}.js`)
                .addField(":file_folder: Tipo", `\`\`\`js\n${mayuscula(tipo)}\n\`\`\``, true)
                .addField(":stopwatch: Tiempo", `\`\`\`fix\n${Date.now() - tiempo1}ms\n\`\`\``, true)
                .setColor("#7289DA")
                msg.edit(embed);
                })
        
              } else { 
    
    // Si el texto es de una longitud normal hace el eval normal
    
    
                const embed = new Discord.MessageEmbed()
                .addField(":inbox_tray: Entrada", `\`\`\`js\n${code}\n\`\`\``)
                .addField(":outbox_tray: Salida", `\`\`\`js\n${txt.replace(client.token, "No quieres saber eso.")}\n\n\`\`\``)
                .addField(":file_folder: Tipo", `\`\`\`js\n${mayuscula(tipo)}\n\`\`\``, true)
                .addField(":stopwatch: Tiempo", `\`\`\`fix\n${Date.now() - tiempo1}ms\n\`\`\``, true)
                .setColor("#7289DA")
                msg.edit(embed);
              }
            } catch (err) {          
              const code = args.join(' ');
              const embed = new Discord.MessageEmbed()
              .setDescription('**Error en la evaluación**')
              .addField(":inbox_tray: Entrada", `\`\`\`js\n${code}\n\`\`\``)
              .addField(":outbox_tray: Salida", `\`\`\`js\n${err}\n\`\`\``)
              .addField(":file_folder: Tipo", `\`\`\`js\nError\n\`\`\``)
              .setColor("RED")
              msg.edit(embed);
          }
        })
 }
 }