let handler = async (m, { conn, usedPrefix }) => {
var doc = ['pdf','zip','vnd.openxmlformats-officedocument.presentationml.presentation','vnd.openxmlformats-officedocument.spreadsheetml.sheet','vnd.openxmlformats-officedocument.wordprocessingml.document']
var document = doc[Math.floor(Math.random() * doc.length)]    
let text = `⟥⟝⟢⟨ *owner* ⟩⟣⟞⟤

• Wa.me/5212412377467 (CREADOR)

• Wa.me/5212411261883 (CREADOR)

• Wa.me/5212411719888 (CREADOR)

⬒─⟢⟨©ᴏғᴄ-ʏᴏᴠᴀɴɪ﹏✍⟩⟣─⬒`.trim()   
let buttonMessage= {
'document': { url: `https://github.com/OFC-YOVANI/HATSUNE-MIKU-ULTRA.git` },
'mimetype': `application/${document}`,
'fileName': `*⫷᭄HATSUNE-MIKU-ULTRA✍*`,
'fileLength': 99999999999999,
'pageCount': 200,
'contextInfo': {
'forwardingScore': 200,
'isForwarded': true,
'externalAdReply': {
'mediaUrl': 'https://github.com/OFC-YOVANI/HADES-BOT-OMEGA',
'mediaType': 2,
'previewType': 'pdf',
'title': 'ᴇʟ ᴍᴇᴊᴏʀ ʙᴏᴛ ᴅᴇ ᴡʜᴀᴛsᴀᴘᴘ⁩',
'body': wm,
'thumbnail': imagen5,
'sourceUrl': 'https://youtu.be/4eA5nDxPjOA' }},
'caption': text,
'footer': wm,
//'buttons':[
//{buttonId: `${usedPrefix}menu`, buttonText: {displayText: '𝙼𝙴𝙽𝚄'}, type: 1}, 
//{buttonId: `${usedPrefix}donar`, buttonText: {displayText: '𝙳𝙾𝙽𝙰𝚁'}, type: 1}],
'headerType': 6 }
conn.sendMessage(m.chat, buttonMessage, { quoted: m })
}
handler.help = ['owner', 'creator']
handler.tags = ['info']
handler.command = /^(owner|creator|creador|propietario)$/i
handler.register = true
export default handler
