let handler = async (m, { conn }) => {
let info = `
*${htki} INFO BOT ${htka}*
`
const sections = [
   {
	title: `✃ STATS`,
	rows: [
	    {title: "ଘ 📊Test Speed", rowId: '.testspeed', description: '╰►Test Speed 𝐒𝐤𝐲𝐁𝗼𝐭𝐳' },
	    {title: "ଘ 📉Stats Server", rowId: '.statserver', description: '╰►Status server BOT' },
	    {title: "ଘ 💻Bot Info", rowId: '.botinfo', description: '╰►Info Server BOT' },
	{title: "ଘ 👤Nama Creator", rowId: '.nameown', description: '╰►Developer 𝐒𝐤𝐲𝐁𝗼𝐭𝐳' },
	{title: "ଘ 💰Donasi", rowId: '.donasi', description: '╰►Support 𝐒𝐤𝐲𝐁𝗼𝐭𝐳 Agar on 24 Jam' },
	]
    }, {
    title: `✃ INFO`,
	rows: [
	    {title: "ଘ 📖Rules", rowId: '.rules', description: '╰►S&K 𝐒𝐤𝐲𝐁𝗼𝐭𝐳' },
	    {title: "ଘ ⛔No Menu", rowId: '', description: '╰►No menu' },
	    {title: "ଘ 📑Event", rowId: '.event', description: '╰►Event Dari Kami' },
	{title: "ଘ ⚡Speed", rowId: '.speed', description: '╰►Speed 𝐒𝐤𝐲𝐁𝗼𝐭𝐳' },
	{title: "ଘ 💵Sewa BOT", rowId: '.sewa', description: '╰►Sewa 𝐒𝐤𝐲𝐁𝗼𝐭𝐳' },
	{title: "ଘ 🗣️Request Fitur", rowId: '.request', description: '╰►Request Fitur 𝐒𝐤𝐲𝐁𝗼𝐭𝐳' },
	{title: "ଘ 🌏Lokasi BOT", rowId: '.loc2', description: '╰►Lokasi Fangz BOT' },
	{title: "ଘ 🧰Version Bot", rowId: '.cekversi', description: '╰►Versi 𝐒𝐤𝐲𝐁𝗼𝐭𝐳' },
	{title: "ଘ 🤖Sapa Bot", rowId: '.salken', description: '╰►Menyapa 𝐒𝐤𝐲𝐁𝗼𝐭𝐳' },
	]
    },{
    title: `✃ INFO BOT`,
	rows: [
	    {title: "ଘ 🧰Version Bot", rowId: '.cekversi', description: '╰►Versi 𝐒𝐤𝐲𝐁𝗼𝐭𝐳' },
	    {title: "ଘ 🌏Lokasi BOT", rowId: '.loc2', description: '╰►Lokasi 𝐒𝐤𝐲𝐁𝗼𝐭𝐳' },
	{title: "ଘ 🤖Sapa Bot", rowId: '.salken', description: '╰►Menyapa 𝐒𝐤𝐲𝐁𝗼𝐭𝐳' },
	{title: "ଘ ⚡Speed Bot", rowId: '.speed', description: '╰►Speed 𝐒𝐤𝐲𝐁𝗼𝐭𝐳' },
	{title: "ଘ 📊Status Bot", rowId: '.botstats', description: '╰►Sistem 𝐒𝐤𝐲𝐁𝗼𝐭𝐳' },
	]
    },
]

const listMessage = {
  text: ' ',
  footer: info,
  title: null,
  buttonText: "📮C E K",
  sections
}
await conn.sendMessage(m.chat, listMessage, { quoted: m})
//conn.sendHydrated(m.chat, info, wm, null, sgc, "🌎 Group Official", null,null, [['Owner','.owner']], m)
}

handler.help = ['infolist']
handler.tags = ['info']
handler.command = /^(infolist)$/i

export default handler