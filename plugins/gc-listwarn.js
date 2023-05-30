let handler = async (m, { conn, isOwner }) => {
let adv = Object.entries(global.db.data.users).filter(user => user[1].warn)
let warns = global.db.data.users.warn
let user = global.db.data.users
let imagewarn = './src/warn.jpg'
let caption = `╭━〘𝙆𝙖𝙣𝙖𝙠𝙞𝘽𝙤𝙩-𝙐𝙡𝙩𝙧𝙖〙━⊷ 
┃ ⛥⚠️ 𝚄𝚂𝚄𝙰𝚁𝙸𝙾𝚂 𝙰𝙳𝚅𝙴𝚁𝚃𝙸𝙳𝙾𝚂
┃ ⛥│⫷᭄𝙆𝙖𝙣𝙖𝙠𝙞𝘽𝙤𝙩-𝙐𝙡𝙩𝙧𝙖﹏✍
┃ ⛥║ *Total : ${adv.length} Usuarios* ${adv ? '\n' + adv.map(([jid, user], i) => `
┃ ⛥║ 1.- ${isOwner ? '@' + jid.split`@`[0] : jid} *(${user.warn}/3)*\n║\n║ - - - - - - - - -`.trim()).join('\n') : ''}
┃ ⛥╰───────────
╰━━━━━━━━━━━──⊷`
await conn.sendButton(m.chat, caption, wm, imagewarn, [['𝐌 𝐄 𝐍 𝐔 🌠', '#menu']], m, {mentions: await conn.parseMention(caption)})}
handler.command = /^(listwarn)$/i 
handler.group = true
handler.admin = true
handler.limit = 1
export default handler
