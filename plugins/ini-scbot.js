import fetch from 'node-fetch'
import moment from 'moment-timezone'
let handler = async(m, { conn, text, usedPrefix, command }) => {
   let pp = 'https://telegra.ph/file/afe9c325a811bee8c5530.mp4'
let name = await conn.getName(m.sender)
let pepe = pp ? await (await fetch(pp)).buffer() : Buffer.alloc(0)
let str = `${htki} *SCRIPT* ${htka}\n\n${htjava} ${ucapan()} Kak\n${htjava} Name: ${name.split("@")[0]}\n\nπΊπππππ πͺπππ π°ππ π·ππππππ\nπ°ππππ π»πππ π³ππππ π³πππππ ?\nπ»ππππ π»πππππ π«π π©ππππ .`
conn.sendHydrated(m.chat, str, wm, pepe, 'https://xnxx.com/', 'Source Code', null, null, [
['πΌπ΄π½π', '/menu'],
['\n sα΄Κα΄Ι΄α΄ΚΙ΄Κα΄ Ι’α΄‘ sα΄Ι΄Ι’α΄\nα΄α΄Ιͺ α΄α΄ Ι’α΄ Ι΄Ι’α΄‘α΄ sα΄α΄α΄ Ι’α΄‘?','tq'],
], m, {quoted: fgif})
}
handler.command = ['sc']

export default handler

function ucapan() {
    const time = moment.tz('Asia/Jakarta').format('HH')
    let res = "Selamat malam π"
    if (time >= 4) {
        res = "Selamat pagi π"
    }
    if (time > 10) {
        res = "Selamat siang βοΈ"
    }
    if (time >= 15) {
        res = "Selamat sore π"
    }
    if (time >= 18) {
        res = "Selamat malam π"
    }
    return res
}