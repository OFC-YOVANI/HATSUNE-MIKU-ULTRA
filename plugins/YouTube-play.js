import { youtubeSearch, youtubedl, youtubedlv2, youtubedlv3 } from '@bochilteam/scraper' 
import fetch from "node-fetch"
import yts from 'yt-search'
let handler = async (m, { conn, command, text, usedPrefix }) => {
let q, v, yt, dl_url, ttl, size, lolhuman, lolh, n, n2, n3, n4, cap, qu, currentQuality
	if (!text) throw `*[❗𝐈𝐍𝐅𝐎❗] 𝙽𝙾𝙼𝙱𝚁𝙴 𝙳𝙴 𝙻𝙰 𝙲𝙰𝙽𝙲𝙸𝙾𝙽 𝙵𝙰𝙻𝚃𝙰𝙽𝚃𝙴, 𝙿𝙾𝚁 𝙵𝙰𝚅𝙾𝚁 𝙸𝙽𝙶𝚁𝙴𝚂𝙴 𝙴𝙻 𝙲𝙾𝙼𝙰𝙽𝙳𝙾 𝙼𝙰𝚂 𝙴𝙻 𝙽𝙾𝙼𝙱𝚁𝙴/𝚃𝙸𝚃𝚄𝙻𝙾 𝙾 𝙴𝙽𝙻𝙰𝙲𝙴 𝙳𝙴 𝙰𝙻𝙶𝚄𝙽𝙰 𝙲𝙰𝙽𝙲𝙸𝙾𝙽 𝙾 𝚅𝙸𝙳𝙴𝙾 𝙳𝙴 𝚈𝙾𝚄𝚃𝚄𝙱𝙴\n\n*—◉ 𝙴𝙹𝙴𝙼𝙿𝙻𝙾:\n/play Farruko beba*`
	let vid = (await yts(text)).all[0]
let { title, description, publishedTime, url, thumbnail, videoId, timestamp, views, published } = vid
try {
await m.reply(`*_⏳Sᴇ ᴇsᴛᴀ ᴘʀᴏᴄᴇsᴀɴᴅᴏ Sᴜ ᴀᴜᴅɪᴏ...⏳`)
await m.reply(`⌛ _Cargando..._\n▰▰▰▱▱▱▱▱▱`)
if (command == 'play') {	
conn.sendFile(m.chat, thumbnail, 'thumbnail.jpg', `╭─────────────◆ 
┃✯-- ༴⃟🌹๋ོ࣭ꦿ⁩PLAY-YouTube--⦿
┃✯╭──────────◆
┃⇄◁   ㅤ  ❚❚ㅤ   ▷ㅤ  ↻
┃✯╭━➤͜͡🎶🔥 Titulo:* _${title}_
┃✯╰➤⏰ Duración:* ${timestamp}
┃✯│▢𝙷𝙰𝚃𝚂𝚄𝙽𝙴-𝙼𝙸𝙺𝚄-𝚄𝙻𝚃𝚁𝙰
┃✯╰───────────◆
╰━━━━━━━━━━━──⊷`.trim(), m)
q = '128kbps'
v = url
yt = await youtubedl(v).catch(async () => await youtubedlv2(v)).catch(async () => await youtubedlv3(v))
dl_url = await yt.audio[q].download()
title = await yt.title
size = await yt.audio[q].fileSizeH
await conn.sendFile(m.chat, dl_url, title + '.mp3', null, m, false, { mimetype: 'audio/mp4' })
}
if (command == 'play2') {
conn.sendFile(m.chat, thumbnail, 'thumbnail.jpg', `╭─────────────◆ 
┃✯-- ༴⃟🌹๋ོ࣭ꦿ⁩PLAY-YouTube2--⦿
┃✯╭──────────◆
┃⇄◁   ㅤ  ❚❚ㅤ   ▷ㅤ  ↻
┃✯╭━➤͜͡🎶🔥 Titulo:* _${title}
┃✯╰➤⏰ Duración:* ${timestamp}
┃✯│▢𝙷𝙰𝚃𝚂𝚄𝙽𝙴-𝙼𝙸𝙺𝚄-𝚄𝙻𝚃𝚁𝙰
┃✯╰───────────◆
╰━━━━━━━━━━━──⊷`.trim(), m)
let qu = args[1] || '360'
let q = qu + 'p'
let v = args[0]
const yt = await youtubedl(v).catch(async _ => await youtubedlv2(v)).catch(async _ => await youtubedlv3(v))
const dl_url = await yt.video[q].download()
const ttl = await yt.title
const size = await yt.video[q].fileSizeH
await await conn.sendMessage(m.chat, { video: { url: dl_url }, fileName: `${ttl}.mp4`, mimetype: 'video/mp4', caption: `*aquí está tu video*`, thumbnail: await fetch(yt.thumbnail) }, { quoted: m })
}
} catch (e) {
}}
handler.help = ['play', 'play2'].map(v => v + ' <pencarian>')
handler.tags = ['downloader']
handler.command = ['play', 'play2']

export default handler