let handler = async (m, { conn }) => {
let info = `
*${htki} VIRUS ${htka}*
          
 ๐ฅ๐ฑ๐ ๐ฐ๐๐ธ๐ต๐ฃ๐ข๐๐ฅ
          
                  
โโโโโโ *แดแดสษชแดแดแดแดษด* โโโโโโ
*๐ฎGunakan Dengan tujuan yang benar. Jangan untuk merugikan orang lain tanpa alasan!*
`
const sections = [
   {
    title: `โ VIRTEX`,
	rows: [
	    {title: "๐Power 1", rowId: '.virtex21', description: 'Jangan lupa Subs Yt ๐ฐ๐๐๐๐ฃ๐ข๐' },
	    {title: "๐Power 2", rowId: '.virtex22', description: 'Jangan lupa subs Yt ๐ฐ๐๐๐๐ฃ๐ข๐' },
	{title: "๐Power 3", rowId: '.virtex23', description: 'Jangan lupa subs Yt ๐ฐ๐๐๐๐ฃ๐ข๐' },
	{title: "๐Power 4", rowId: '.virtex24', description: 'Jangan lupa subs Yt ๐ฐ๐๐๐๐ฃ๐ข๐' },
	{title: "๐Power 5", rowId: '.virtex25', description: 'Jangan lupa subs Yt ๐ฐ๐๐๐๐ฃ๐ข๐' },
	]
    }, {
    title: `โ INFO`,
	rows: [
	    {title: "๐ฅDownload WhatsApp Imune", rowId: '.imune', description: 'Download WhatsApp Kebal' },
	    {title: "๐ฅVirus Troli", rowId: '.virustroli', description: 'Subs Yt ๐ฐ๐๐๐๐ฃ๐ข๐' },
	    ]
        }, {
    title: `โ BUY`,
	rows: [
	    {title: "๐ธUpgrade Premium", rowId: '.sewa', description: 'Dan unclock Fitur premium lainya!' },
	    ]
        },
]

const listMessage = {
  text: ' ',
  footer: info,
  title: null,
  buttonText: "๐บGASS",
  sections
}
await conn.sendMessage(m.chat, listMessage, { quoted: m})
//conn.sendHydrated(m.chat, info, wm, null, sgc, "๐ Group Official", null,null, [['Owner','.owner']], m)
}
handler.command = /^powerlist$/i
handler.premium = false

export default handler