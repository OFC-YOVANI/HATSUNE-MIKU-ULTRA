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
┃✯│✯-𝐇𝐄𝐑𝐑𝐀𝐌𝐈𝐄𝐍𝐓𝐀𝐒-⦿
┃✯╰────────────◆
┃✯╭──────────◆
┃✯️│▢/ᴄʜᴀᴛɢᴘᴛ➟ᴛᴇxᴛᴏ
┃✯│▢/️ᴅᴀʟʟ-ᴇ➟ᴛᴇxᴛᴏ
┃✯│▢/️ᴛᴀᴍᴀñᴏ➟ᴄᴀɴᴛɪᴅᴀᴅ➟ɪᴍᴀɢᴇɴ➟ᴠɪᴅᴇᴏ
┃✯│▢/️ᴄʟɪᴍᴀ➟ᴘᴀís➟ᴄɪᴜᴅᴀᴅ
┃✯│▢/️ᴇɴᴄᴜᴇsᴛᴀ➟ᴛᴇxᴛᴏ1|ᴛᴇxᴛᴏ2...
┃✯│▢/️ᴀғᴋ➟ᴍᴏᴛɪᴠᴏ
┃✯│▢/️ᴏᴄʀ➟ʀᴇsᴘᴏɴᴅᴇ➟ᴀ➟ɪᴍᴀɢᴇɴ
┃✯️│▢/ᴀᴄᴏʀᴛᴀʀ➟ᴇɴʟᴀᴄᴇ➟ʟɪɴᴋ
┃✯│▢/️ᴄᴀʟᴄ➟ᴏᴘᴇʀᴀᴄɪᴏɴ➟ᴍᴀᴛʜ
┃✯│▢/️ᴅᴇʟ➟ᴍᴇɴsᴀᴊᴇ
┃✯│▢/️ᴡʜᴀᴛᴍᴜsɪᴄ➟ᴀᴜᴅɪᴏ
┃✯│▢/️ʀᴇᴀᴅǫʀ➟ɪᴍᴀɢᴇɴ➟ǫʀ
┃✯│▢/️ǫʀᴄᴏᴅᴇ➟ᴛᴇxᴛᴏ
┃✯️│▢/ʀᴇᴀᴅᴍᴏʀᴇ➟ᴛᴇxᴛᴏ1| ᴛᴇxᴛᴏ2
┃✯│▢/sᴛʏʟᴇᴛᴇxᴛᴛ➟ᴇxᴛᴏ
┃✯│▢/ᴛʀᴀᴅᴜᴄɪʀ➟ᴛᴇxᴛᴏ
┃✯│▢/ɴᴏᴡᴀ➟ɴᴜᴍᴇʀᴏ
┃✯│▢/ᴄᴏᴠɪᴅ➟ᴘᴀɪs
┃✯│▢/ʜᴏʀᴀʀɪᴏ
┃✯╰───────────◆
╰━━━━━━━━━━━──⊷
ᴏᴡɴᴇʀ:ᴏғᴄ➟ʏᴏᴠᴀɴɪ
ɴᴜᴍᴇʀᴏ:Wa.me/5212412377467`.trim()
conn.sendFile(m.chat, img, 'cat.jpg', caption, m)
} catch (e) {
console.log(e)
throw '*Error!*'
}}
handler.command = /^(herramientas|Herramientas)$/i
handler.fail = null
export default handler




