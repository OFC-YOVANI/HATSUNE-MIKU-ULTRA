import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems }) => {
if (usedPrefix == 'a' || usedPrefix == 'A') return    
try {
let pp = imagen3
let img =  './lib/img/Me.jpg'
let d = new Date(new Date + 3600000)
let locale = 'es'
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' })
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime)
let user = global.db.data.users[m.sender]
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length 
let more = String.fromCharCode(8206)
let readMore = more.repeat(850)   
let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
var doc = ['pdf','zip','vnd.openxmlformats-officedocument.presentationml.presentation','vnd.openxmlformats-officedocument.spreadsheetml.sheet','vnd.openxmlformats-officedocument.wordprocessingml.document']
var document = doc[Math.floor(Math.random() * doc.length)]    
let str = `⟥⟝⟢⟨ *INSTALARBOT* ⟩⟣⟞⟤
*𝗛ᴏʟᴀ,➟ ${taguser}
*hola bienvenido a la información de instalación del bot por favor puedes mirar el video de tutorial y hacer el mismo procedimiento si tienes alguna duda puedes comunicarmelo en el número fijado Espero que tengas suerte en la instalación*
⬒ ─⟢⟨ *APK-TERMUX* ⟩⟣─ ⬒
➟ https://www.mediafire.com/file/190g4b86nhyof7b/com.termux_118.apk/file?dkey=wfddtbi5jtj98
⬒ ─⟢⟨ *OWNER* ⟩⟣─ ⬒
➟ *Número para ayuda*
➟ Wa.me/5212412377467
⬒ ─⟢⟨ *TUTORIAL* ⟩⟣─ ⬒
➟ https://youtu.be/LqXJpxICLtE
⬒ ─⟢⟨ *COMANDOS* ⟩⟣─ ⬒
➟ opción 1 estos comandos son para los que no pudieron hacer con los comandos normales estos comandos lo van a instalar solito 
➟ termux-setup-storage
➟ pkg update -y && pkg upgrade -y && pkg install -y bash && pkg install -y wget && pkg install yarn
➟ wget -O - https://raw.githubusercontent.com/OFC-YOVANI/HATSUNE-MIKU-ULTRA/master/install.sh | bash
⬒ ─⟢⟨ *COMANDOS* ⟩⟣─ ⬒
➟ *opción 2 de instalación"
➟ cd && termux-setup-storage
➟ apt-get update -y && apt-get upgrade -y
➟ pkg install -y git nodejs ffmpeg imagemagick && pkg install yarn 
➟ git clone https://github.com/OFC-YOVANI/HATSUNE-MIKU-ULTRA.git && cd HATSUNE-MIKU-ULTRA
➟ yarn 
➟ npm install
➟ npm update
➟ npm start
⬒ ─⟢⟨ *ACTIVAR* ⟩⟣─ ⬒
➟ cd HATSUNE-MIKU-ULTRA
➟ npm start
⬒ ─⟢⟨ *CÓDIGO* ⟩⟣─ ⬒
➟ *pide otro código*
➟ cd HATSUNE-MIKU-ULTRA
➟ rm -rf Session-activa
➟ npm start
⬒─⟢⟨©𝙷𝙰𝚃𝚂𝚄𝙽𝙴-𝙼𝙸𝙺𝚄-𝚄𝙻𝚃𝚁𝙰✍⟩⟣─⬒`.trim()
if (m.isGroup) {
//await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
let fkontak2 = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }  
conn.sendMessage(m.chat, { image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')}, { quoted: fkontak2 })  
} else {    
//await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
let fkontak2 = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }  
conn.sendMessage(m.chat, { image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')}, { quoted: fkontak2 })}
} catch {
conn.reply(m.chat, '*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝙻 𝙼𝙴𝙽𝚄 𝚃𝙸𝙴𝙽𝙴 𝚄𝙽 𝙴𝚁𝚁𝙾𝚁 𝚈 𝙽𝙾 𝙵𝚄𝙴 𝙿𝙾𝚂𝙸𝙱𝙻𝙴 𝙴𝙽𝚅𝙸𝙰𝚁𝙻𝙾, 𝚁𝙴𝙿𝙾𝚁𝚃𝙴𝙻𝙾 𝙰𝙻 𝙿𝚁𝙾𝙿𝙸𝙴𝚃𝙰𝚁𝙸𝙾 𝙳𝙴𝙻 𝙱𝙾𝚃*', m)
}}
handler.command = /^(instalarbot|Lnstalarbot)$/i
handler.fail = null
export default handler
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}