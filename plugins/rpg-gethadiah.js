let handler = async (m, { conn }) => {
let info = `
*${htki} GET HADIAH ${htka}*
`
const sections = [
   {
	title: `β CLAIM`,
	rows: [
	    {title: "πΈDaily", rowId: '.daily', description: 'Hadiah per hari' },
	    {title: "πΈWeekly", rowId: '.weekly', description: 'Hadiah per minggu' },
	{title: "πΈMonthly", rowId: '.monthly', description: 'Hadiah per bulan' },
	{title: "πΈSpecial", rowId: '.special', description: 'Hadiah special' },
	]
    }, {
    title: `β INFO`,
	rows: [
	    {title: "π»INFO BOT", rowId: '.info', description: 'Info πΊππππππ'},
	    {title: "ποΈMENU", rowId: '.menu', description: 'Back to menu' },
	{title: "π€OWNER", rowId: '.owner', description: 'Owner πΊππππππ' },
	{title: "π°SEWA BOT", rowId: '.sewa', description: 'Sewa πΊππππππ' },
	]
    },
]

const listMessage = {
  text: ' ',
  footer: info,
  title: null,
  buttonText: "G E T",
  sections
}
await conn.sendMessage(m.chat, listMessage, { quoted: m})
//conn.sendHydrated(m.chat, info, wm, null, sgc, "π Group Official", null,null, [['Owner','.owner']], m)
}

handler.help = ['hadiah']
handler.tags = ['rpg']
handler.command = /^(hadiah)$/i

export default handler