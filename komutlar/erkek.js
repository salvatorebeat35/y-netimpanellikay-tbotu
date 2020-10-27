const Discord = require('discord.js');
const db = require("quick.db")
exports.run = async (client, message, args) => {
 if (!message.member.roles.has('KAYIT YETKİLİSİ ROL İD') && !message.member.hasPermission('ADMINISTRATOR')) return message.channel.sendEmbed(new Discord.RichEmbed().addField(`Yetersiz Yetki` , `Bu Komutu Kullanmak için Yeterli Yetkiye Sahip Değilsin`).setColor("RANDOM").setFooter(message.author.tag ,message.author.avatarURL).setTimestamp()).then(msg => msg.delete(9000));
 let kullanıcı = message.mentions.users.first()
  if (!kullanıcı) return message.channel.sendEmbed(new Discord.RichEmbed().addField(`Hatalı Kullanım` , `Lütfen Bir Kullanıcı Etiketleyin!`).setColor("RANDOM").setFooter(message.author.tag ,message.author.avatarURL).setTimestamp());
  let user = message.mentions.users.first();
  let rol = message.mentions.roles.first()
  let member = message.guild.member(kullanıcı)
     let isim = args[1]
      if(!isim) return message.channel.sendEmbed(new Discord.RichEmbed().addField(`Hatalı Kullanım` , `Lütfen Bir İsim Yazın!`).setColor("RANDOM").setFooter(message.author.tag ,message.author.avatarURL).setTimestamp());
   let yas = args[2]
      if(!yas) return message.channel.sendEmbed(new Discord.RichEmbed().addField(`Hatalı Kullanım` , `Lütfen Bir Yaş Yazın!`).setColor("RANDOM").setFooter(message.author.tag ,message.author.avatarURL).setTimestamp());    
  member.addRole('ERKEK ROL İD')
  member.removeRole('KAYITSIZ ROL İD')
  message.react('EMOJİ İD')
  const db = require('quick.db')
 db.add(`erkek.${message.author.id}.${message.guild.id}`, 1)
     const kanal = message.guild.channels.find(c => c.id == "KAYIT BİLGİ KANAL İD") 
    const embed1 = new Discord.RichEmbed() 
    .addField(`Safe Code - Salvo`, `${member.user} **Hoşgeldin, Seninle Beraber** \`${member.guild.memberCount}\` **Üyeye Ulaştık** \`kurallar\` Kanalını Okumayı Unutma`)
    .setColor("BLACK")
    .setFooter(message.author.tag ,message.author.avatarURL)
    .setTimestamp()
  let embed = new Discord.RichEmbed() 
  .setColor("BLACK")
  .addField(`Safe Code - Salvo`, `${member.user} **Adlı Üye <@&ERKEK ROL İD> Rolünü Verdim ve Sunucuya Kaydettim**`).setFooter(message.author.tag ,message.author.avatarURL)
  .setTimestamp()
  return message.channel.send(embed).then(kanal.send(embed1))
}
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["bay","erkek","e","adam"],
  kategori: "Yetkili Komutları",
  permLevel: 0
}
exports.help = {
  name: 'erkek',
  description: "Sunucuya Erkek Olarak Kayıt Eder",
  usage: 'kız'
} 