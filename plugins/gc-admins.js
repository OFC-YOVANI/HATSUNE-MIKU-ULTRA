let handler = async (m, { conn, participants, groupMetadata, args }) => {
const pp = await conn.profilePictureUrl(m.chat, 'image').catch(_ => null) || './Plugins/Fondos/admins.jpg'
const groupAdmins = participants.filter(p => p.admin)
const listAdmin = groupAdmins.map((v, i) => `${i + 1}. @${v.id.split('@')[0]}`).join('\n')
const owner = groupMetadata.owner || groupAdmins.find(p => p.admin === 'superadmin')?.id || m.chat.split`-`[0] + '@s.whatsapp.net'
let pesan = args.join` `
let oi = `*𝙼𝙴𝙽𝚂𝙰𝙹𝙴:* ${pesan}`
let text = `⟥⟝⟢⟨ *𝐈𝐍𝐕𝐎C-𝐀𝐃𝐌𝐈𝐍𝐒* ⟩⟣⟞⟤ 
•${oi}
• *𝙰𝙳𝙼𝙸𝙽𝚂:*
• ${listAdmin}
⬒─⟢⟨©𝙷𝙰𝚃𝚂𝚄𝙽𝙴-𝙼𝙸𝙺𝚄-𝚄𝙻𝚃𝚁𝙰✍⟩⟣─⬒`.trim()
conn.sendFile(m.chat, pp, 'error.jpg', text, m, false, { mentions: [...groupAdmins.map(v => v.id), owner] })
}
handler.help = ['admins <texto>']
handler.tags = ['group']
handler.command = /^(admins|@admins|dmins)$/i
handler.group = true
export default handler

