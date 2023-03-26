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
┃✯│▢/ᴀᴅᴅ➟ɴᴜᴍᴇʀᴏ
┃✯│▢/ᴋɪᴄᴋ➟@ᴛᴀɢ
┃✯│▢/ᴋɪᴄᴋ2➟@ᴛᴀɢ
┃✯│▢/ʟɪsᴛᴀɴᴜᴍ➟ᴛᴇxᴛᴏ
┃✯│▢/ᴋɪᴄᴋɴᴜᴍ➟ᴛᴇxᴛᴏ
┃✯│▢/ɢʀᴜᴘᴏ➟ᴀʙʀɪʀ➟ᴄᴇʀʀᴀʀ
┃✯│▢/ɢʀᴏᴜᴘᴛɪᴍᴇ➟ᴏᴘᴄɪᴏɴ➟ᴛɪᴇᴍᴘᴏ
┃✯│▢/ᴘʀᴏᴍᴏᴛᴇ➟@ᴛᴀɢ
┃✯│▢/ᴅᴇᴍᴏᴛᴇ➟@ᴛᴀɢ
┃✯│▢/ᴀᴅᴍɪɴs➟ᴛᴇxᴛᴏ➟𝑢𝑠𝑜 𝑠𝑖𝑛 𝑝𝑟𝑒𝑓𝑖𝑗𝑜
┃✯│▢/ᴅᴇᴍᴏᴛᴇ➟@ᴛᴀɢ
┃✯│▢/ɪɴғᴏɢʀᴏᴜᴘ
┃✯│▢/ʀᴇsᴇᴛʟɪɴᴋ
┃✯│▢/ʟɪɴᴋ
┃✯│▢/sᴇᴛɴᴀᴍᴇ➟ᴛᴇxᴛᴏ
┃✯│▢/sᴇᴛᴅᴇsᴄ➟ᴛᴇxᴛᴏ
┃✯│▢/ɪɴᴠᴏᴄᴀʀ➟ᴛᴇxᴛᴏ
┃✯│▢/sᴇᴛᴡᴇʟᴄᴏᴍᴇ➟ᴛᴇxᴛᴏ
┃✯│▢/sᴇᴛʙʏᴇ➟ᴛᴇxᴛᴏ
┃✯│▢/ʜɪᴅᴇᴛᴀɢ➟ᴛᴇxᴛᴏ
┃✯│▢/ʜɪᴅᴇᴛᴀɢ➟ᴀᴜᴅɪᴏ
┃✯│▢/ʜɪᴅᴇᴛᴀɢ➟ᴠɪᴅᴇᴏ
┃✯│▢/ʜɪᴅᴇᴛᴀɢ➟ɪᴍᴀɢᴇɴ
┃✯│▢/ᴡᴀʀɴ➟@ᴛᴀɢ
┃✯│▢/ᴜɴᴡᴀʀɴ➟@ᴛᴀɢ
┃✯│▢/ʟɪsᴛᴡᴀʀɴ
┃✯│▢/ғᴀɴᴛᴀsᴍᴀs
┃✯│▢/ᴅᴇsᴛʀᴀʙᴀ
┃✯│▢/sᴇᴛᴘᴘ➟ɪᴍᴀɢᴇɴ
┃✯╰───────────◆
╰━━━━━━━━━━━──⊷
ᴏᴡɴᴇʀ:ᴏғᴄ➟ʏᴏᴠᴀɴɪ
ɴᴜᴍᴇʀᴏ:Wa.me/5212412377467`.trim()
conn.sendFile(m.chat, img, 'cat.jpg', caption, m)
} catch (e) {
console.log(e)
throw '*Error!*'
}}
handler.command = /^(administrargrupo|Administrargrupo)$/i
handler.fail = null
export default handler




