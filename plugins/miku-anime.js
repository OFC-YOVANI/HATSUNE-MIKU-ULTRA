import axios from "axios"
let handler = async (m, {command, conn, usedPrefix}) => {
let res = (await axios.get(`https://raw.githubusercontent.com/OFC-YOVANI/HADES-BOT-MD/master/src/hades/anime-${command}.json`)).data  
let haha = await res[Math.floor(res.length * Math.random())]    
conn.sendFile(m.chat, haha, 'error.jpg', `_${command}_`, m)
//conn.sendButton(m.chat, `_${command}_`.trim(), author, haha, [['🔄 𝚂𝙸𝙶𝚄𝙸𝙴𝙽𝚃𝙴 🔄', `${usedPrefix + command}`]], m)    
}
handler.command = handler.help = ['miku']
handler.tags = ['anime']
export default handler
