import { areJidsSameUser } from '@adiwajshing/baileys'
let handler = async (m, { conn, args }) => {
    let group = m.chat
    if (/^[0-9]{5,16}-?[0-9]+@g\.us$/.test(args[0])) group = args[0]
    if (!/^[0-9]{5,16}-?[0-9]+@g\.us$/.test(group)) throw 'Hanya bisa dibuka di grup'
    let groupMetadata = await conn.groupMetadata(group)
    if (!groupMetadata) throw 'groupMetadata is undefined :\\'
    if (!('participants' in groupMetadata)) throw 'participants is not defined :('
    let me = groupMetadata.participants.find(user => areJidsSameUser(user.id, conn.user.id))
    if (!me) throw 'Gw gk ada di grup itu 🗿'
    if (!me.admin) throw 'Gw bukan atmin bg 🗿'
    conn.sendHydrated(m.chat, `*${htki} L I N K ${htka}*\n *𝑆𝑖𝑙𝑎ℎ𝑘𝑎𝑛 𝑆𝑎𝑙𝑖𝑛 𝐷𝑖 𝐵𝑎𝑤𝑎ℎ!!*`, botdate, null, 'https://www.whatsapp.com/otp/copy/'+'https://chat.whatsapp.com/' + await conn.groupInviteCode(group), 'C O P Y', null, null, [
      ['LIST GROUP', '/listgroup']
    ], null)
}
handler.help = ['linkgroup']
handler.tags = ['group']
handler.command = /^linkgc|link(gro?up)?$/i


export default handler