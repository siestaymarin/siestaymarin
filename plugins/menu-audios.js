const { levelling } = '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'
let handler = async (m, { conn, usedPrefix }) => {
let pp = './Menu2.jpg'
try {
} catch (e) {
} finally {
//let about = (await conn.getStatus(who).catch(console.error) || {}).status || ''
let name = await conn.getName(m.sender)
let str = `
*ใ๐ค ๐ท๐พ๐ป๐ฐ @${m.sender.split("@")[0]} ๐คๅฝก*

* โโโโโโโโ ๐๐๐ฟ๐๐บ๐ถ๐๐ผ๐_๐ ๐ โโโโโโโโ*

*๐พ๐ค๐ฃ๐ฉ๐๐๐ฉ๐ค ๐ฟ๐๐ก ๐พ๐ง๐๐๐๐ค๐ง: wa.me/50373617390*

*๐๐ฃ๐จ๐ฉ๐๐๐ง๐๐ข ๐ฟ๐๐ก ๐พ๐ง๐๐๐๐ค๐ง: https://www.instagram.com/robert_y_siesta/*

*๐๐๐ฎ๐ฅ๐๐ก ๐ฟ๐๐ก ๐พ๐ง๐๐๐๐ค๐ง: https://www.paypal.com/paypalme/siestaymarin*

* โโโโโโโโ ๐๐๐ฟ๐๐บ๐ถ๐๐ผ๐_๐ ๐ โโโโโโโโ*

*<๐๐๐๐ ๐๐๐๐๐๐/>*
*- ๐ด๐๐ฒ๐๐ธ๐ฑ๐ด ๐ป๐ฐ๐ ๐๐ธ๐ถ๐๐ธ๐ด๐ฝ๐๐ด๐ ๐ฟ๐ฐ๐ป๐ฐ๐ฑ๐๐ฐ๐ ๐พ ๐ต๐๐ฐ๐๐ด๐ ๐๐ธ๐ฝ ๐ฝ๐ธ๐ฝ๐ถ๐๐ฝ ๐ฟ๐๐ด๐ต๐ธ๐น๐พ (#, /, *, .)*

โ๏ธ ๐ค๐ _Quien es tu sempai botsito 7w7_
โ๏ธ ๐ค๐ _Te diagnostico con gay_
โ๏ธ ๐ค๐ _A nadie le importa_
โ๏ธ ๐ค๐ _Fiesta del admin_
โ๏ธ ๐ค๐ _Fiesta del administrador_ 
โ๏ธ ๐ค๐ _Vivan los novios_
โ๏ธ ๐ค๐ _Feliz cumpleaรฑos_
โ๏ธ ๐ค๐ _Noche de paz_
โ๏ธ ๐ค๐ _Buenos dias_
โ๏ธ ๐ค๐ _Buenos tardes_
โ๏ธ ๐ค๐ _Buenos noches_
โ๏ธ ๐ค๐ _Audio hentai_
โ๏ธ ๐ค๐ _Chica lgante_
โ๏ธ ๐ค๐ _Feliz navidad_
โ๏ธ ๐ค๐ _Vete a la vrg_
โ๏ธ ๐ค๐ _Pasa pack Bot_
โ๏ธ ๐ค๐ _Atencion grupo_
โ๏ธ ๐ค๐ _Marica quien_
โ๏ธ ๐ค๐ _Murio el grupo_
โ๏ธ ๐ค๐ _Oh me vengo_
โ๏ธ ๐ค๐ _tio que rico_
โ๏ธ ๐ค๐ _Viernes_
โ๏ธ ๐ค๐ _Baneado_
โ๏ธ ๐ค๐ _Sexo_
โ๏ธ ๐ค๐ _Hola_
โ๏ธ ๐ค๐ _Un pato_
โ๏ธ ๐ค๐ _Nyanpasu_
โ๏ธ ๐ค๐ _Te amo_
โ๏ธ ๐ค๐ _Yamete_
โ๏ธ ๐ค๐ _Baรฑate_
โ๏ธ ๐ค๐ _Es puto_
โ๏ธ ๐ค๐ _La biblia_
โ๏ธ ๐ค๐ _Onichan_
โ๏ธ ๐ค๐ _Mierda de Bot_
โ๏ธ ๐ค๐ _Siuuu_
โ๏ธ ๐ค๐ _Rawr_
โ๏ธ ๐ค๐ _UwU_
โ๏ธ ๐ค๐ _:c_
โ๏ธ ๐ค๐ _a_
`.trim()
conn.sendHydrated(m.chat, str, wm, pp, 'https://github.com/BrunoSobrino/TheMystic-Bot-MD', '๐๐๐ฟ๐๐บ๐ถ๐๐ผ๐_๐ ๐', null, null, [
['๐ผ๐ด๐ฝ๐ ๐ฟ๐๐ธ๐ฝ๐ฒ๐ธ๐ฟ๐ฐ๐ป', '/menu']
], m)
}}
handler.help = ['menu2', 'help2', '?2', 'menuaudios']
handler.tags = ['main']
handler.command = /^(menu2|audios|menรบ2|memu2|menuaudio|menuaudios|memuaudios|memuaudio|audios|audio)$/i
handler.fail = null
export default  handler
