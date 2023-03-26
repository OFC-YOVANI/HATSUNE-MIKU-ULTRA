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
┃✯│✯-𝐄𝐒𝐓𝐈𝐊𝐄𝐑𝐒-⦿
┃✯╰────────────◆
┃✯╭──────────◆
┃✯│▢/sᴛɪᴄᴋᴇʀ➟ʀᴇsᴘᴏɴᴅᴇʀ➟ᴀ➟ɪᴍᴀɢᴇɴ➟ᴏ➟ᴠɪᴅᴇᴏ
┃✯│▢/sᴛɪᴄᴋᴇʀ➟ᴇɴʟᴀᴄᴇ➟ʟɪɴᴋ
┃✯│▢/s➟ʀᴇsᴘᴏɴᴅᴇʀ➟ɪᴍᴀɢᴇɴ➟ᴏ➟ᴠɪᴅᴇᴏ
┃✯│▢/s➟ᴇɴʟᴀᴄᴇ➟ʟɪɴᴋ
┃✯│▢/sғᴜʟʟ➟ɪᴍᴀɢᴇɴ➟ᴏ➟ᴠɪᴅᴇᴏ
┃✯│▢/ᴇᴍᴏᴊɪᴍɪx➟ᴇᴍᴏᴊɪ➟1&ᴇᴍᴏᴊɪ 2
┃✯│▢/sᴄɪʀᴄʟᴇ➟ɪᴍᴀɢᴇɴ
┃✯│▢/sʀᴇᴍᴏᴠᴇʙɢ➟ɪᴍᴀɢᴇɴ
┃✯│▢/sᴇᴍᴏᴊɪ➟ᴛɪᴘᴏ➟ᴇᴍᴏᴊɪ
┃✯│▢/ᴀᴛᴛᴘ➟ᴛᴇxᴛᴏ
┃✯│▢/ᴀᴛᴛᴘ2➟ᴛᴇxᴛᴏ
┃✯│▢/ᴀᴛᴛᴘ3➟ᴛᴇxᴛᴏ
┃✯│▢/ᴛᴛᴘ➟ᴛᴇxᴛᴏ
┃✯│▢/ᴛᴛᴘ2➟ᴛᴇxᴛᴏ
┃✯│▢/ᴛᴛᴘ3➟ᴛᴇxᴛᴏ
┃✯│▢/ᴛᴛᴘ4➟ᴛᴇxᴛᴏ
┃✯│▢/ᴛᴛᴘ5➟ᴛᴇxᴛᴏ
┃✯│▢/ᴘᴀᴛ➟@ᴛᴀɢ
┃✯│▢/sʟᴀᴘ➟@ᴛᴀɢ
┃✯│▢/ᴋɪss➟@ᴛᴀɢ
┃✯│▢/ᴅᴀᴅᴏ
┃✯│▢/ᴡᴍ➟ᴘᴀᴄᴋɴᴀᴍᴇ➟ᴀᴜᴛʜᴏʀ
┃✯│▢/sᴛɪᴄᴋᴇʀᴍᴀʀᴋᴇʀ➟ᴇғᴇᴄᴛᴏ➟ɪᴍᴀɢᴇɴ
┃✯│▢/sᴛɪᴄᴋᴇʀғɪʟᴛᴇʀ➟ᴇғᴇᴄᴛᴏ➟ɪᴍᴀɢᴇɴ
┃✯╰───────────◆
╰━━━━━━━━━━━──⊷
ᴏᴡɴᴇʀ:ᴏғᴄ➟ʏᴏᴠᴀɴɪ
ɴᴜᴍᴇʀᴏ:Wa.me/5212412377467`.trim()
conn.sendFile(m.chat, img, 'cat.jpg', caption, m)
} catch (e) {
console.log(e)
throw '*Error!*'
}}
handler.command = /^(menústickers|Menústickers|menustickers|menustickers)$/i
handler.fail = null
export default handler




