import fetch from 'node-fetch'
let handler  = async (m, { conn, text }) => {
try {
let res = await fetch('https://i.imgur.com/JP52fdP.jpg')
let img = await res.buffer()
let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
let caption = `╭─────────────◆
│✯𝙷𝙰𝚃𝚂𝚄𝙽𝙴-𝙼𝙸𝙺𝚄-𝚄𝙻𝚃𝚁𝙰
│✯╭──────────◆
│✯│ʜᴏʟᴀ:${taguser}✯
│✯╰───────────◆
│✯╭──────────◆
│✯│ *Hola bienvenido al menú*
│✯│ *Escribe el menú que quieres* 
│✯│ *usar   y disfruta del bot*
│✯╰───────────◆
╰━━━━━━━━━━━──⊷
╭─────────────◆ 
┃✯----𝐈𝐍𝐅𝐎 𝐁𝐎𝐓----⦿
┃✯╭──────────◆
┃✯│/Enableactivar
┃✯│/Audiosconvertidores
┃✯│/buscadoresgoogle
┃✯│/menústickers
┃✯│/Descargasmuci
┃✯│/serbot
┃✯│/efectosylogros
┃✯│/herramientas
┃✯│/administrargrupo
┃✯│/permisosowner
┃✯│/cuentasoficiales
┃✯│/instalarbot
┃✯╰───────────◆
╰━━━━━━━━━━━──⊷
ᴏᴡɴᴇʀ:ᴏғᴄ➟ʏᴏᴠᴀɴɪ
ɴᴜᴍᴇʀᴏ:Wa.me/5212412377467`.trim()
conn.sendFile(m.chat, img, 'cat.jpg', caption, m)
} catch (e) {
console.log(e)
throw '*Error!*'
}}
handler.command = /^(menu|menú|memu|memú|help|info|comandos|allmenu|2help|menu1.2|ayuda|commands|commandos|cmd)$/i
handler.fail = null
export default handler




