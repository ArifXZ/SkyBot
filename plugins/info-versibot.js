let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `
     πππ«π¬π’πΌπ§ ππΌπ­ 3.6
`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', ' *Beli sc? 55K* ', 'status@broadcast')
}
handler.help = ['cekversi']
handler.tags = ['info']
handler.command = /^(cekversi)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

export default handler