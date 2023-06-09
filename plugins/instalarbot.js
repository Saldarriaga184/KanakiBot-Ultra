import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems }) => {
try {
let pp = imagen3
let img = await(await fetch('https://i.imgur.com/JP52fdP.jpg')).buffer()
let d = new Date(new Date + 3600000)
let locale = 'es'
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' })
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime)
let user = global.db.data.users[m.sender]
let { money, joincount } = global.db.data.users[m.sender]
let { exp, limit, level, role } = global.db.data.users[m.sender]
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length 
let more = String.fromCharCode(8206)
let readMore = more.repeat(850)   
let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
let str = `╭─────────────◆
┃✯༄●⃝𝙆𝙖𝙣𝙖𝙠𝙞𝘽𝙤𝙩-𝙐𝙡𝙩𝙧𝙖
┃✯-𝗛ᴏʟᴀ,➟${taguser}
┃✯🍁᭢━━━━━━━━━᭥🍁᭢
┃✯│▢ᴏᴡɴᴇʀ:ᴏғᴄ➟D.E.S.N_OFFICIAL17 
┃✯│▢ғᴇᴄʜᴀ:➟${date}
┃✯│▢ᴛɪᴇᴍᴘᴏ ᴀᴄᴛɪᴠᴏ:➟${uptime}
┃✯╰▢ᴜsᴜᴀʀɪᴏs:➟${rtotalreg}
╰━━━━━━━━━━━──⊷
。☆。*。☆。
        ★。＼｜／。★
       🅳︎.🄴.🆂︎.🄽-🅾︎🅵︎🅸︎🅲︎🅸︎🅰︎🅻︎17
        ★。／｜＼。★
       .。☆。*。☆.¸¸.•*'*•. ★

         。☆。*。☆。
        ★。＼｜／。★
           🅴︎🄽🆁︎🄸🆀︎🅄🅴︎
       ★。／｜＼。★
        .。☆。*。☆.¸¸.•*'*•. ★
ꨄ︎-----  -----  -----  -----  -----ꨄ︎
╭─────────────◆
┃✯-📽️𝚃𝚄𝚃𝙾𝚁𝙸𝙰𝙻🎥-⦿
┃✯🍁᭢━━━━━━━━━᭥🍁᭢
┃✯╭──────────◆
┃✯│https://youtu.be/-bxpZwU_A3o
┃✯╰https://youtu.be/LqXJpxICLtE
╰━━━━━━━━━━━──⊷
ꨄ︎-----  -----  -----  -----  -----ꨄ︎
╭─────────────◆
┃✯-💥𝙲𝙾𝙼𝙰𝙽𝙳𝙾𝚂 𝚃𝙴𝚁𝙼𝚄𝚇💥-⦿
┃✯🍁᭢━━━━━━━━━᭥🍁᭢
┃✯╭──────────◆
┃✯│cd && termux-setup-storage
┃✯│apt-get update -y && apt-get upgrade -y
┃✯│pkg install -y git nodejs ffmpeg imagemagick && pkg install yarn 
┃✯│git clone https://github.com/Saldarriaga184/KanakiBot-Ultra.git && cd KanakiBot-Ultra 
┃✯│yarn 
┃✯│npm install
┃✯│npm update
┃✯╰npm start
╰━━━━━━━━━━━──⊷
ꨄ︎-----  -----  -----  -----  -----ꨄ︎
╭─────────────◆
┃✯-💥𝙲𝙾𝙼𝙰𝙽𝙳𝙾𝚂 𝚃𝙴𝚁𝙼𝚄𝚇💥-⦿
┃✯🍁᭢━━━━━━━━━᭥🍁᭢
┃✯│opción 2 estos comandos son para los que no pudieron hacer con los comandos normales estos comandos lo van a instalar solito 
┃✯│termux-setup-storage
┃✯│pkg update -y && pkg upgrade -y && pkg install -y bash && pkg install -y wget && pkg install yarn
┃✯╰wget -O - https://raw.githubusercontent.com/Saldarriaga184/KanakiBot-Ultra/master/install.sh | bash
╰━━━━━━━━━━━──⊷
ᴏᴡɴᴇʀ:ᴏғᴄ➟D.E.S.N_OFFICIAL17 
ɴᴜᴍᴇʀᴏ:Wa.me/593990058725`.trim()
if (m.isGroup) {
conn.sendMessage(m.chat, { image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')}, { quoted: m })    
} else {    
let fkontak2 = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }  
conn.sendMessage(m.chat, { image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')}, { quoted: fkontak2 })}
} catch {
conn.reply(m.chat, '*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝙻 𝙼𝙴𝙽𝚄 𝚃𝙸𝙴𝙽𝙴 𝚄𝙽 𝙴𝚁𝚁𝙾𝚁 𝚈 𝙽𝙾 𝙵𝚄𝙴 𝙿𝙾𝚂𝙸𝙱𝙻𝙴 𝙴𝙽𝚅𝙸𝙰𝚁𝙻𝙾, 𝚁𝙴𝙿𝙾𝚁𝚃𝙴𝙻𝙾 𝙰𝙻 𝙿𝚁𝙾𝙿𝙸𝙴𝚃𝙰𝚁𝙸𝙾 𝙳𝙴𝙻 𝙱𝙾𝚃*', m)
}}
handler.command = /^(instalarbot|Lnstalarbot|sc)$/i
handler.exp = 50
handler.fail = null
export default handler
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}