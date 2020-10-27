const Discord = require('discord.js');
const db = require('quick.db');
exports.run = async (client, message, args) => {
 
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`<:CARRno:524246262191751168> Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);
  
  const mesaj2 = await db.fetch(`sayac_${message.guild.id}`);
  
  let mesaj = args.slice(0).join(' ')
  
      if (!mesaj) {
        return message.channel.send(`<:CARRno:524246262191751168> Giriş mesajını yazmalısın.`)
    }
  
    db.set(`girism_${message.guild.id}`, mesaj)
    message.channel.send(`<:CARRyes:524245926358024193> Giriş mesajı \`${mesaj}\` olarak ayarlandı.`)
}
    
exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['giriş-mesaj'],
  kategori: 'ayarlar',
    permLevel: 3
}

exports.help = {
    name: 'giriş-mesaj-ayarla',
    description: 'Giriş Mesajını Ayarlar. (Kullanıcı isminin geleceği yere "{kullanıcı}", sunucu isminin geleceği yere "{sunucu}" yazınız.)',
    usage: 'giriş-mesaj-ayarla <mesaj>'
}