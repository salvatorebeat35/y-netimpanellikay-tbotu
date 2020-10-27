const Discord = require('discord.js');
var ayarlar = require('../ayarlar.json');
const db = require('quick.db');
exports.run = async (client, message, args, func) => {
  
  if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`<:CARRno:524246262191751168> Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);
  
  let prefix = await db.fetch(`prefix_${message.guild.id}`);
    if (prefix == null) prefix = 's?'
  
  let preffix = db.fetch(`prefix_${message.guild.id}`)
  
  
  if (!args[0])
    return message.channel.send(`<:CARRno:524246262191751168> Bir prefix girmelisin.`)
  db.set(`prefix_${message.guild.id}`, args[0])
    message.channel.send(`<:CARRyes:524245926358024193> Prefix başarıyla \`${args[0]}\` olarak ayarlandı.`)
  
};

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['prefix'],
    permLevel: 0,
    kategori: "ayarlar"
};
  
  exports.help = {
    name: 'prefix-ayarla',
    description: 'Botun Sunucudaki Prefixini Değiştirir.',
    usage: 'prefix-ayarla <yeni prefix>'
};