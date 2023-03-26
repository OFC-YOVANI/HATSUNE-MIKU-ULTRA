import fetch from 'node-fetch'
let handler  = async (m, { conn, text }) => {
try {
let res = await fetch('https://i.imgur.com/yrQ1Uic.jpg')
let img = await res.buffer()
let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
let caption = `╭─────────────◆
│✯𝙷𝙰𝚃𝚂𝚄𝙽𝙴-𝙼𝙸𝙺𝚄-𝚄𝙻𝚃𝚁𝙰
│✯╭──────────◆
│✯│ʜᴏʟᴀ:${taguser}✯
│✯╰───────────◆
│✯╭──────────◆
┃✯│✯-𝚃𝚄𝚃𝙾𝚁𝙸𝙰𝙻-⦿
┃✯╰────────────◆
┃✯│
│✯╭──────────◆
┃✯│✯-𝙲𝙾𝙼𝙰𝙽𝙳𝙾𝚂 𝚃𝙴𝚁𝙼𝚄𝚇-⦿
┃✯╰────────────◆
┃✯╭──────────◆
┃✯│cd && termux-setup-storage
┃✯│apt-get update -y && apt-get upgrade -y
┃✯│pkg install -y git nodejs ffmpeg imagemagick && pkg install yarn 
┃✯│git clone https://github.com/OFC-YOVANI/HATSUNE-MIKU-ULTRA.git && cd HATSUNE-MIKU-ULTRA
┃✯│yarn 
┃✯│npm install
┃✯│npm update
┃✯│npm start
┃✯╰───────────◆
╰━━━━━━━━━━━──⊷
ᴏᴡɴᴇʀ:ᴏғᴄ➟ʏᴏᴠᴀɴɪ
ɴᴜᴍᴇʀᴏ:Wa.me/5212412377467`.trim()
conn.sendFile(m.chat, img, 'cat.jpg', caption, m)
} catch (e) {
console.log(e)
throw '*Error!*'
}}
handler.command = /^(instalarbot|Lnstalarbot|sc)$/i
handler.fail = null
export default handler




