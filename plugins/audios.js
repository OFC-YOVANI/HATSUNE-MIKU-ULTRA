let handler = m => m
handler.all = async function (m) {
let chat = global.db.data.chats[m.chat]

if (/^hola|Holis|olaHola|holis$/i.test(m.text) && chat.audios && !chat.isBanned) {
let vn = './views/Hola.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}   

if (!chat.isBanned && chat.audios && m.text.match(/(canta miku)/gi)) {
let vn = './views/canta.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (!chat.isBanned && chat.audios && m.text.match(/(canta miku2)/gi)) {    
let vn = './views/canta2.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}

if (!chat.isBanned && chat.audios && m.text.match(/(play|play2|play3|play4)/gi)) {    
let vn = './views/miku.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}

return !0 }
export default handler

