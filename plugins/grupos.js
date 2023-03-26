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
┃✯│✯-𝐆𝐑𝐔𝐏𝐎-⦿
┃✯╰────────────◆
┃✯╭──────────◆
┃✯│༺💥𝚜𝚘𝚙𝚘𝚛𝚝𝚎💥༻
┃✯│https://chat.whatsapp.com/Gvv9hISUDV66vUe3jtq58p
┃✯│𝙷𝙰𝚃𝚂𝚄𝙽𝙴-𝙼𝙸𝙺𝚄-𝚄𝙻𝚃𝚁𝙰
┃✯│https://chat.whatsapp.com/KlAYxPxLAkSGOyZxeXXZkt
┃✯│𝙷𝙰𝙳𝙴𝚂-𝙱𝙾𝚃 𝚈 𝙼𝙸𝙺𝚄-𝙱𝙾𝚃
┃✯│https://chat.whatsapp.com/JUCsNTePHeu7zbur4jDo4n
┃✯│𝚙á𝚐𝚒𝚗𝚊 𝚍𝚎 𝙵𝚊𝚌𝚎𝚋𝚘𝚘𝚔
┃✯│https://www.facebook.com/groups/987464505464904/?ref=share
┃✯│𝚌𝚊𝚗𝚊𝚕 𝚍𝚎 𝚈𝚘𝚞𝚃𝚞𝚋𝚎
┃✯│https://youtube.com/@hades_bot2391
┃✯│𝚌𝚊𝚗𝚊𝚕 𝚍𝚎 𝚍𝚒𝚜𝚌𝚘𝚛𝚍 
┃✯│https://discord.gg/tUJSTNA9
┃✯╰───────────◆
╰━━━━━━━━━━━──⊷
ᴏᴡɴᴇʀ:ᴏғᴄ➟ʏᴏᴠᴀɴɪ
ɴᴜᴍᴇʀᴏ:Wa.me/5212412377467`.trim()
conn.sendFile(m.chat, img, 'cat.jpg', caption, m)
} catch (e) {
console.log(e)
throw '*Error!*'
}}
handler.command = /^(cuentasoficiales|Cuentasoficiales)$/i
handler.fail = null
export default handler




