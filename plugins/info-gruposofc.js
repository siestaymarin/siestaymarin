let media = './Menu2.jpg'
let handler = async (m, { conn, command }) => conn.sendButton(m.chat, `
*Hola ππ», unete a los grupos oficiales para pasar un rato agradable usando el Bot o platicando*

*β€ Grupos oficiales del Bot:*
*1.-* https://chat.whatsapp.com/GZ3BTzH2yR280axgtfE0Mu
`.trim(), wm, media, [['πΈπ π°π» πΌπ΄π½π πΏππΈπ½π²πΈπΏπ°π»', '.menu']], m)
handler.command = /^linkgc|grupos$/i
export default handler
