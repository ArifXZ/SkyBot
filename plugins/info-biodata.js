let handler = async (m, { conn }) => {
let caption = `––––––『 *BIODATA* 』––––––
⫹⫺ *💌 Nama* : 𝑨𝒓𝒊𝒇𝒛𝒚𝒏
⫹⫺ *✉️ Nama RL* : 𝑨𝒓𝒊𝒇
⫹⫺ *♂️ Gender* : Boys
⫹⫺ *🕉 Agama* : 𝑰𝒔𝒍𝒂𝒎
⫹⫺ *⏰ Tanggal lahir* : Private 
⫹⫺ *🎨 Umur* : 17
⫹⫺ *🧮 Kelas* : 11
⫹⫺ *🧩 Hobby* : 𝑵𝒐𝒏𝒕𝒐𝒏 𝑩𝒐𝒌𝒆𝒑
⫹⫺ *💬 Sifat* : 𝑫𝒊𝒏𝒈𝒊𝒏
⫹⫺ *🗺️ Tinggal* : 𝑰𝒏𝒅𝒐, 𝑱𝒂𝒘𝒂 𝑩𝒂𝒓𝒂𝒕, 𝑩𝒐𝒈𝒐𝒓

⫹⫺ *📷 ɪɴsᴛᴀɢʀᴀᴍ* : https://instagram.com/arifzyn19_
⫹⫺ *🐈 ɢɪᴛʜᴜʙ:* https://github.com/RifXz19
•·––––––––––––––––––––––––––·•
`
await conn.sendButton(m.chat, caption, author, null, [
        ['Menu', `#menu`]
        ], m, {quoted: ftroli})
}
handler.help = ['biodata']
handler.tags = ['info']
handler.command = /^(biodata|arif|bioowner)$/i

export default handler