import { xpRange } from '../lib/levelling.js'
const { levelling } = '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'
import { promises } from 'fs'
import { join } from 'path'
let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text }) => {
try {
let vn = './media/menu.mp3'
let pp = './Menu2.jpg'
let _package = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch(_ => ({}))) || {}
let { exp, limit, level, role } = global.db.data.users[m.sender]
let { min, xp, max } = xpRange(level, global.multiplier)
let name = await conn.getName(m.sender)
let d = new Date(new Date + 3600000)
let locale = 'es'
let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric'
})
let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
day: 'numeric',
month: 'long',
year: 'numeric'
}).format(d)
let time = d.toLocaleTimeString(locale, {
hour: 'numeric',
minute: 'numeric',
second: 'numeric'
})
let _uptime = process.uptime() * 1000
let _muptime
if (process.send) {
process.send('uptime')
_muptime = await new Promise(resolve => {
process.once('message', resolve)
setTimeout(resolve, 1000)
}) * 1000
}
let muptime = clockString(_muptime)
let uptime = clockString(_uptime)
let totalreg = Object.keys(global.db.data.users).length
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
let replace = {
'%': '%',
p: _p, uptime, muptime,
me: conn.getName(conn.user.jid),
npmname: _package.name,
npmdesc: _package.description,
version: _package.version,
exp: exp - min,
maxexp: xp,
totalexp: exp,
xp4levelup: max - exp,
github: _package.homepage ? _package.homepage.url || _package.homepage : '[unknown github url]',
level, limit, name, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role,
readmore: readMore
}
text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
 
    

let str = `
*ミ🖤 𝙷𝙾𝙻𝙰 ✨@${m.sender.split("@")[0]}✨, 𝙰𝚀𝚄𝙸 𝙴𝚂𝚃𝙰 𝙴𝙻 𝙼𝙴𝙽𝚄 𝙲𝙾𝙼𝙿𝙻𝙴𝚃𝙾 𝙳𝙴 𝗞𝘂𝗿𝘂𝗺𝗶𝗕𝗼𝘁_𝗠𝗗 🖤彡*

* ▂▃▅▇█▓▒░ 𝗞𝘂𝗿𝘂𝗺𝗶𝗕𝗼𝘁_𝗠𝗗 ░▒▓█▇▅▃▂*

*𝘾𝙤𝙣𝙩𝙖𝙘𝙩𝙤 𝘿𝙚𝙡 𝘾𝙧𝙚𝙖𝙙𝙤𝙧: wa.me/50373617390*

*𝙄𝙣𝙨𝙩𝙖𝙜𝙧𝙖𝙢 𝘿𝙚𝙡 𝘾𝙧𝙚𝙖𝙙𝙤𝙧: https://www.instagram.com/robert_y_siesta/*

*𝙋𝙖𝙮𝙥𝙖𝙡 𝘿𝙚𝙡 𝘾𝙧𝙚𝙖𝙙𝙤𝙧: https://www.paypal.com/paypalme/siestaymarin*

* ▂▃▅▇█▓▒░ 𝗞𝘂𝗿𝘂𝗺𝗶𝗕𝗼𝘁_𝗠𝗗 ░▒▓█▇▅▃▂*

*📅 𝙵𝙴𝙲𝙷𝙰: ${week}, ${date}*
*📈 𝚃𝙸𝙴𝙼𝙿𝙾 𝙰𝙲𝚃𝙸𝚅𝙾: ${uptime}*
*📊 𝚄𝚂𝚄𝙰𝚁𝙸𝙾𝚂: ${rtotalreg}*

☆━━━━━━━━━━━━━━━━━━━☆
*<𝕀ℕ𝔽𝕆ℝ𝕄𝔸ℂ𝕀𝕆ℕ 𝔻𝔼𝕃 𝔹𝕆𝕋/>*

✍️ ඬ ⃟ 💟 _${usedPrefix}grupos_
✍️ ඬ ⃟ 💟 _${usedPrefix}estado_
✍️ ඬ ⃟ 💟 _${usedPrefix}infobot_
✍️ ඬ ⃟ 💟 _${usedPrefix}donar_
✍️ ඬ ⃟ 💟 _${usedPrefix}grouplist_
✍️ ඬ ⃟ 💟 _${usedPrefix}owner_
✍️ ඬ ⃟ 💟 _${usedPrefix}script_
✍️ ඬ ⃟ 💟 _Bot_ (𝑢𝑠𝑜 𝑠𝑖𝑛 𝑝𝑟𝑒𝑓𝑖𝑗𝑜)

☆━━━━━━━━━━━━━━━━━━━☆
*<𝕌ℕ𝔼 𝕌ℕ 𝔹𝕆𝕋 𝔸 𝕋𝕌 𝔾ℝ𝕌ℙ𝕆/>*

✍️ 🖤👽 _${usedPrefix}join *<enlace / link / url>*_

☆━━━━━━━━━━━━━━━━━━━☆
*<𝕁𝕌𝔼𝔾𝕆𝕊/>*

✍️ 🖤🎖️ _${usedPrefix}mates *<noob / easy / medium / hard / extreme /impossible /impossible2>*_
✍️ 🖤🎖️ _${usedPrefix}ppt *<papel / tijera /piedra>*_
✍️ 🖤🎖️ _${usedPrefix}prostituto *<nombre / @tag>*_
✍️ 🖤🎖️ _${usedPrefix}prostituta *<nombre / @tag>*_
✍️ 🖤🎖️ _${usedPrefix}gay2 *<nombre / @tag>*_
✍️ 🖤🎖️ _${usedPrefix}lesbiana *<nombre / @tag>*_
✍️ 🖤🎖️ _${usedPrefix}pajero *<nombre / @tag>*_
✍️ 🖤🎖️ _${usedPrefix}pajera *<nombre / @tag>*_
✍️ 🖤🎖️ _${usedPrefix}puto *<nombre / @tag>*_
✍️ 🖤🎖️ _${usedPrefix}puta *<nombre / @tag>*_
✍️ 🖤🎖️ _${usedPrefix}manco *<nombre / @tag>*_
✍️ 🖤🎖️ _${usedPrefix}manca *<nombre / @tag>*_
✍️ 🖤🎖️ _${usedPrefix}rata *<nombre / @tag>*_
✍️ 🖤🎖️ _${usedPrefix}love *<nombre / @tag>*_
✍️ 🖤🎖️ _${usedPrefix}doxear *<nombre / @tag>*_
✍️ 🖤🎖️ _${usedPrefix}pregunta *<texto>*_
✍️ 🖤🎖️ _${usedPrefix}slot *<apuesta>*_
✍️ 🖤🎖️ _${usedPrefix}pvp *<@tag>*_
✍️ 🖤🎖️ _${usedPrefix}simi *<texto>*_
✍️ 🖤🎖️ _${usedPrefix}topgays_
✍️ 🖤🎖️ _${usedPrefix}topotakus_
✍️ 🖤🎖️ _${usedPrefix}formarpareja_
✍️ 🖤🎖️ _${usedPrefix}verdad_
✍️ 🖤🎖️ _${usedPrefix}reto_

☆━━━━━━━━━━━━━━━━━━━☆
*<𝔸ℂ𝕋𝕀𝕍𝔸ℝ 𝕆 𝔻𝔼𝕊𝔸ℂ𝕋𝕀𝕍𝔸ℝ/>*

✍️ 🖤☑️ _${usedPrefix}enable *welcome*_
✍️ 🖤☑️ _${usedPrefix}disable *welcome*_
✍️ 🖤☑️ _${usedPrefix}enable *modohorny*_
✍️ 🖤☑️ _${usedPrefix}disable *modohorny*_
✍️ 🖤☑️ _${usedPrefix}enable *antilink*_
✍️ 🖤☑️ _${usedPrefix}disable *antilink*_
✍️ 🖤☑️ _${usedPrefix}enable *antilink2*_
✍️ 🖤☑️ _${usedPrefix}disable *antilink2*_
✍️ 🖤☑️ _${usedPrefix}enable *detect*_
✍️ 🖤☑️ _${usedPrefix}disable *detect*_
✍️ 🖤☑️ _${usedPrefix}enable *audios*_
✍️ 🖤☑️ _${usedPrefix}disable *audios*_
✍️ 🖤☑️ _${usedPrefix}enable *autosticker*_
✍️ 🖤☑️ _${usedPrefix}disable *autosticker*_

☆━━━━━━━━━━━━━━━━━━━☆
*<ℝ𝔼ℙ𝕆ℝ𝕋𝔼𝕊 𝔻𝔼 𝔽𝔸𝕃𝕃𝕆𝕊/>*

✍️ 🖤🔰 _${usedPrefix}reporte *<texto>*_

☆━━━━━━━━━━━━━━━━━━━☆
*<𝔻𝔼𝕊ℂ𝔸ℝ𝔾𝔸𝕊/>*

✍️ 🖤📥 _${usedPrefix}facebook *<enlace / link / url>*_
✍️ 🖤📥 _${usedPrefix}instagram *<enlace / link / url>*_
✍️ 🖤📥 _${usedPrefix}mediafire *<enlace / link / url>*_
✍️ 🖤📥 _${usedPrefix}instagram *<enlace / link / url>*_
✍️ 🖤📥 _${usedPrefix}gitclone *<enlace / link / url>*_
✍️ 🖤📥 _${usedPrefix}stickerpack *<enlace / link / url>*_
✍️ 🖤📥 _${usedPrefix}gdrive *<enlace / link / url>*_
✍️ 🖤📥 _${usedPrefix}tiktok *<enlace / link / url>*_
✍️ 🖤📥 _${usedPrefix}xnxxdl *<enlace / link / url>*_
✍️ 🖤📥 _${usedPrefix}xvideosdl *<enlace / link / url>*_
✍️ 🖤📥 _${usedPrefix}ytmp3 *<enlace / link / url>*_
✍️ 🖤📥 _${usedPrefix}ytmp4 *<enlace / link / url>*_
✍️ 🖤📥 _${usedPrefix}ytmp3doc *<enlace / link / url>*_
✍️ 🖤📥 _${usedPrefix}ytmp4doc *<enlace / link / url>*_
✍️ 🖤📥 _${usedPrefix}play.1 *<texto / enlace / link / url>*_
✍️ 🖤📥 _${usedPrefix}play.2 *<texto / enlace / link / url>*_
✍️ 🖤📥 _${usedPrefix}play *<texto>*_
✍️ 🖤📥 _${usedPrefix}playdoc *<texto>*_
✍️ 🖤📥 _${usedPrefix}playlist *<texto>*_
✍️ 🖤📥 _${usedPrefix}playlist2 *<texto>*_
✍️ 🖤📥 _${usedPrefix}spotify *<texto>*_
✍️ 🖤📥 _${usedPrefix}imagen *<texto>*_
✍️ 🖤📥 _${usedPrefix}pinteret *<texto>*_
✍️ 🖤📥 _${usedPrefix}wallpaper *<texto>*_
✍️ 🖤📥 _${usedPrefix}wallpaper2 *<texto>*_
✍️ 🖤📥 _${usedPrefix}pptiktok *<nombre de usuario>*_
✍️ 🖤📥 _${usedPrefix}igstalk *<nombre de usuario>*_
✍️ 🖤📥 _${usedPrefix}igstory *<nombre de usuario>*_
✍️ 🖤📥 _${usedPrefix}tiktokstalk *<nombre de usuario>*_

☆━━━━━━━━━━━━━━━━━━━☆
*<𝔾ℝ𝕌ℙ𝕆𝕊/>* 

✍️ 🖤💎 _${usedPrefix}add *<numero>*_
✍️ 🖤💎 _${usedPrefix}kick *<@tag>*_
✍️ 🖤💎 _${usedPrefix}grupo *<abrir / cerrar>*_
✍️ 🖤💎 _${usedPrefix}promote *<@tag>*_
✍️ 🖤💎 _${usedPrefix}demote *<@tag>*_
✍️ 🖤💎 _admins *<texto>*_ (𝑢𝑠𝑜 𝑠𝑖𝑛 𝑝𝑟𝑒𝑓𝑖𝑗𝑜)
✍️ 🖤💎 _${usedPrefix}demote *<@tag>*_
✍️ 🖤💎 _${usedPrefix}infogroup_
✍️ 🖤💎 _${usedPrefix}link_
✍️ 🖤💎 _${usedPrefix}setname *<texto>*_
✍️ 🖤💎 _${usedPrefix}setdesc *<texto>*_
✍️ 🖤💎 _${usedPrefix}invocar *<texto>*_
✍️ 🖤💎 _${usedPrefix}setwelcome *<texto>*_
✍️ 🖤💎 _${usedPrefix}setbye *<texto>*_
✍️ 🖤💎 _${usedPrefix}hidetag *<texto>*_

☆━━━━━━━━━━━━━━━━━━━☆
*<ℂ𝕆ℕ𝕍𝔼ℝ𝕋𝕀𝔻𝕆ℝ𝔼𝕊/>*

✍️ 🖤🧧 _${usedPrefix}toimg *<responde a un sticker>*_
✍️ 🖤🧧 _${usedPrefix}tomp3 *<responde a un video / nota de voz>*_
✍️ 🖤🧧 _${usedPrefix}toptt *<responde a un video / audio>*_
✍️ 🖤🧧 _${usedPrefix}tovideo *<responde a un audio>*_
✍️ 🖤🧧 _${usedPrefix}tourl *<responde a un video / imagen / audio>*_
✍️ 🖤🧧 _${usedPrefix}tts es *<texto>*_

☆━━━━━━━━━━━━━━━━━━━☆
*<𝔼𝔽𝔼ℂ𝕋𝕆𝕊 𝕐 𝕃𝕆𝔾𝕆𝕊/>*

✍️ 🖤🖍️ _${usedPrefix}logos *<efecto> <texto>*_
✍️ 🖤🖍️ _${usedPrefix}logocorazon *<texto>*_
✍️ 🖤🖍️ _${usedPrefix}logochristmas *<texto>*_
✍️ 🖤🖍️ _${usedPrefix}simpcard *<@tag>*_
✍️ 🖤🖍️ _${usedPrefix}hornycard *<@tag>*_
✍️ 🖤🖍️ _${usedPrefix}lolice *<@tag>*_
✍️ 🖤🖍️ _${usedPrefix}ytcomment *<texto>*_
✍️ 🖤🖍️ _${usedPrefix}itssostupid_
✍️ 🖤🖍️ _${usedPrefix}pixelar_
✍️ 🖤🖍️ _${usedPrefix}blur_

☆━━━━━━━━━━━━━━━━━━━☆
*<ℝ𝔸ℕ𝔻𝕆𝕄/>*

✍️ 🖤👾 _${usedPrefix}cristianoronaldo_
✍️ 🖤👾 _${usedPrefix}messi_
✍️ 🖤👾 _${usedPrefix}meme_
✍️ 🖤👾 _${usedPrefix}itzy_
✍️ 🖤👾 _${usedPrefix}blackpink_
✍️ 🖤👾 _${usedPrefix}kpop *<blackpink / exo / bts>*_
✍️ 🖤👾 _${usedPrefix}lolivid_
✍️ 🖤👾 _${usedPrefix}loli_
✍️ 🖤👾 _${usedPrefix}navidad_
✍️ 🖤👾 _${usedPrefix}ppcouple_
✍️ 🖤👾 _${usedPrefix}neko_
✍️ 🖤👾 _${usedPrefix}waifu_
✍️ 🖤👾 _${usedPrefix}akira_
✍️ 🖤👾 _${usedPrefix}akiyama_
✍️ 🖤👾 _${usedPrefix}anna_
✍️ 🖤👾 _${usedPrefix}asuna_
✍️ 🖤👾 _${usedPrefix}ayuzawa_
✍️ 🖤👾 _${usedPrefix}boruto_
✍️ 🖤👾 _${usedPrefix}chiho_
✍️ 🖤👾 _${usedPrefix}chitoge_
✍️ 🖤👾 _${usedPrefix}deidara_
✍️ 🖤👾 _${usedPrefix}erza_
✍️ 🖤👾 _${usedPrefix}elaina_
✍️ 🖤👾 _${usedPrefix}eba_
✍️ 🖤👾 _${usedPrefix}emilia_
✍️ 🖤👾 _${usedPrefix}hestia_
✍️ 🖤👾 _${usedPrefix}hinata_
✍️ 🖤👾 _${usedPrefix}inori_
✍️ 🖤👾 _${usedPrefix}isuzu_
✍️ 🖤👾 _${usedPrefix}itachi_
✍️ 🖤👾 _${usedPrefix}itori_
✍️ 🖤👾 _${usedPrefix}kaga_
✍️ 🖤👾 _${usedPrefix}kagura_
✍️ 🖤👾 _${usedPrefix}kaori_
✍️ 🖤👾 _${usedPrefix}keneki_
✍️ 🖤👾 _${usedPrefix}kotori_
✍️ 🖤👾 _${usedPrefix}kurumi_
✍️ 🖤👾 _${usedPrefix}madara_
✍️ 🖤👾 _${usedPrefix}mikasa_
✍️ 🖤👾 _${usedPrefix}miku_
✍️ 🖤👾 _${usedPrefix}minato_
✍️ 🖤👾 _${usedPrefix}naruto_
✍️ 🖤👾 _${usedPrefix}nezuko_
✍️ 🖤👾 _${usedPrefix}sagiri_
✍️ 🖤👾 _${usedPrefix}sasuke_
✍️ 🖤👾 _${usedPrefix}sakura_
✍️ 🖤👾 _${usedPrefix}cosplay_

☆━━━━━━━━━━━━━━━━━━━☆
*<ℂ𝕆𝕄𝔸ℕ𝔻𝕆𝕊 +𝟙𝟠/>*

✍️ 🖤🔞 _${usedPrefix}pack_
✍️ 🖤🔞 _${usedPrefix}pack2_
✍️ 🖤🔞 _${usedPrefix}pack3_
✍️ 🖤🔞 _${usedPrefix}videoxxx_
✍️ 🖤🔞 _${usedPrefix}tetas_
✍️ 🖤🔞 _${usedPrefix}booty_
✍️ 🖤🔞 _${usedPrefix}ecchi_
✍️ 🖤🔞 _${usedPrefix}furro_
✍️ 🖤🔞 _${usedPrefix}imagenlesbians_
✍️ 🖤🔞 _${usedPrefix}panties_
✍️ 🖤🔞 _${usedPrefix}pene_
✍️ 🖤🔞 _${usedPrefix}porno_
✍️ 🖤🔞 _${usedPrefix}porno2_
✍️ 🖤🔞 _${usedPrefix}randomxxx_
✍️ 🖤🔞 _${usedPrefix}pechos_
✍️ 🖤🔞 _${usedPrefix}yaoi_
✍️ 🖤🔞 _${usedPrefix}yaoi2_
✍️ 🖤🔞 _${usedPrefix}yuri_
✍️ 🖤🔞 _${usedPrefix}yuri2_
✍️ 🖤🔞 _${usedPrefix}trapito_
✍️ 🖤🔞 _${usedPrefix}hentai_
✍️ 🖤🔞 _${usedPrefix}pies_
✍️ 🖤🔞 _${usedPrefix}nsfwloli_
✍️ 🖤🔞 _${usedPrefix}nsfworgy_
✍️ 🖤🔞 _${usedPrefix}nsfwfoot_
✍️ 🖤🔞 _${usedPrefix}nsfwass_
✍️ 🖤🔞 _${usedPrefix}nsfwbdsm_
✍️ 🖤🔞 _${usedPrefix}nsfwcum_
✍️ 🖤🔞 _${usedPrefix}nsfwero_
✍️ 🖤🔞 _${usedPrefix}nsfwfemdom_
✍️ 🖤🔞 _${usedPrefix}nsfwglass_

☆━━━━━━━━━━━━━━━━━━━☆
*<𝔼𝔽𝔼ℂ𝕋𝕆𝕊 𝔻𝔼 𝔸𝕌𝔻𝕀𝕆𝕊/>*
*- 𝚁𝙴𝚂𝙿𝙾𝙽𝙳𝙴 𝙰 𝚄𝙽 𝙰𝚄𝙳𝙸𝙾 𝙾 𝙽𝙾𝚃𝙰 𝙳𝙴 𝚅𝙾𝚉*

✍️ 🖤🎤 _${usedPrefix}bass_
✍️ 🖤🎤 _${usedPrefix}blown_
✍️ 🖤🎤 _${usedPrefix}deep_
✍️ 🖤🎤 _${usedPrefix}earrape_
✍️ 🖤🎤 _${usedPrefix}fast_
✍️ 🖤🎤 _${usedPrefix}fat_
✍️ 🖤🎤 _${usedPrefix}nightcore_
✍️ 🖤🎤 _${usedPrefix}reverse_
✍️ 🖤🎤 _${usedPrefix}robot_
✍️ 🖤🎤 _${usedPrefix}slow_
✍️ 🖤🎤 _${usedPrefix}smooth_
✍️ 🖤🎤 _${usedPrefix}tupai_

☆━━━━━━━━━━━━━━━━━━━☆
*<ℂℍ𝔸𝕋 𝔸ℕ𝕆ℕ𝕀𝕄𝕆/>*

✍️ 🖤📳 _${usedPrefix}start_
✍️ 🖤📳 _${usedPrefix}next_
✍️ 🖤📳 _${usedPrefix}leave_

☆━━━━━━━━━━━━━━━━━━━☆
*<𝔹𝕌𝕊ℂ𝔸𝔻𝕆ℝ𝔼𝕊/>*

✍️ 🖤🔍 _${usedPrefix}stickersearch *<texto>*_
✍️ 🖤🔍 _${usedPrefix}xnxxsearch *<texto>*_
✍️ 🖤🔍 _${usedPrefix}animeinfo *<texto>*_
✍️ 🖤🔍 _${usedPrefix}google *<texto>*_
✍️ 🖤🔍 _${usedPrefix}letra *<texto>*_
✍️ 🖤🔍 _${usedPrefix}wikipedia *<texto>*_
✍️ 🖤🔍 _${usedPrefix}ytsearch *<texto>*_
✍️ 🖤🔍 _${usedPrefix}apkdone *<texto>*_
✍️ 🖤🔍 _${usedPrefix}apkgoogle *<texto>*_
✍️ 🖤🔍 _${usedPrefix}apkmody *<texto>*_
✍️ 🖤🔍 _${usedPrefix}apkshub *<texto>*_
✍️ 🖤🔍 _${usedPrefix}happymod *<texto>*_
✍️ 🖤🔍 _${usedPrefix}hostapk *<texto>*_
✍️ 🖤🔍 _${usedPrefix}revdl *<texto>*_
✍️ 🖤🔍 _${usedPrefix}toraccino *<texto>*_
✍️ 🖤🔍 _${usedPrefix}uapkpro *<texto>*_

☆━━━━━━━━━━━━━━━━━━━☆
*<𝔸𝕌𝔻𝕀𝕆𝕊/>* 
*- 𝙴𝚂𝙲𝚁𝙸𝙱𝙴 𝙻𝙰𝚂 𝚂𝙸𝙶𝚄𝙸𝙴𝙽𝚃𝙴𝚂 𝙿𝙰𝙻𝙰𝙱𝚁𝙰𝚂 𝙾 𝙵𝚁𝙰𝚂𝙴𝚂 𝚂𝙸𝙽 𝙽𝙸𝙽𝙶𝚄𝙽 𝙿𝚁𝙴𝙵𝙸𝙹𝙾 (#, /, *, .)* 
_(𝑢𝑠𝑜 𝑠𝑖𝑛 𝑝𝑟𝑒𝑓𝑖𝑗𝑜)_

✍️ 🖤🔊 _Quien es tu sempai botsito 7w7_
✍️ 🖤🔊 _Te diagnostico con gay_
✍️ 🖤🔊 _A nadie le importa_
✍️ 🖤🔊 _Fiesta del admin_
✍️ 🖤🔊 _Fiesta del administrador_ 
✍️ 🖤🔊 _Vivan los novios_
✍️ 🖤🔊 _Feliz cumpleaños_
✍️ 🖤🔊 _Noche de paz_
✍️ 🖤🔊 _Buenos dias_
✍️ 🖤🔊 _Buenos tardes_
✍️ 🖤🔊 _Buenos noches_
✍️ 🖤🔊 _Audio hentai_
✍️ 🖤🔊 _Chica lgante_
✍️ 🖤🔊 _Feliz navidad_
✍️ 🖤🔊 _Vete a la vrg_
✍️ 🖤🔊 _Pasa pack Bot_
✍️ 🖤🔊 _Atencion grupo_
✍️ 🖤🔊 _Marica quien_
✍️ 🖤🔊 _Murio el grupo_
✍️ 🖤🔊 _Oh me vengo_
✍️ 🖤🔊 _tio que rico_
✍️ 🖤🔊 _Viernes_
✍️ 🖤🔊 _Baneado_
✍️ 🖤🔊 _Sexo_
✍️ 🖤🔊 _Hola_
✍️ 🖤🔊 _Un pato_
✍️ 🖤🔊 _Nyanpasu_
✍️ 🖤🔊 _Te amo_
✍️ 🖤🔊 _Yamete_
✍️ 🖤🔊 _Bañate_
✍️ 🖤🔊 _Es puto_
✍️ 🖤🔊 _La biblia_
✍️ 🖤🔊 _Onichan_
✍️ 🖤🔊 _Mierda de Bot_
✍️ 🖤🔊 _Siuuu_
✍️ 🖤🔊 _Rawr_
✍️ 🖤🔊 _UwU_
✍️ 🖤🔊 _:c_
✍️ 🖤🔊 _a_

☆━━━━━━━━━━━━━━━━━━━☆
*<ℍ𝔼ℝℝ𝔸𝕄𝕀𝔼ℕ𝕋𝔸𝕊/>*

✍️ 🖤🛠️ _${usedPrefix}afk *<motivo>*_
✍️ 🖤🛠️ _${usedPrefix}acortar *<enlace / link / url>*_
✍️ 🖤🛠️ _${usedPrefix}calc *<operacion math>*_
✍️ 🖤🛠️ _${usedPrefix}del *<respondre a mensaje del Bot>*_
✍️ 🖤🛠️ _${usedPrefix}qrcode *<texto>*_
✍️ 🖤🛠️ _${usedPrefix}readmore *<texto1| texto2>*_
✍️ 🖤🛠️ _${usedPrefix}spamwa *<numero|texto|cantidad>*_
✍️ 🖤🛠️ _${usedPrefix}styletext *<texto>*_
✍️ 🖤🛠️ _${usedPrefix}traducir *<texto>*_

☆━━━━━━━━━━━━━━━━━━━☆
*<ℝℙ𝔾 - 𝕃𝕀𝕄𝕀𝕋𝔼𝕊 - 𝔼ℂ𝕆ℕ𝕆𝕄𝕀𝔸/>*

✍️ 🖤💵 _${usedPrefix}balance_
✍️ 🖤💵 _${usedPrefix}claim_
✍️ 🖤💵 _${usedPrefix}top_
✍️ 🖤💵 _${usedPrefix}levelup_
✍️ 🖤💵 _${usedPrefix}myns_
✍️ 🖤💵 _${usedPrefix}perfil_
✍️ 🖤💵 _${usedPrefix}work_
✍️ 🖤💵 _${usedPrefix}minar_
✍️ 🖤💵 _${usedPrefix}buy_
✍️ 🖤💵 _${usedPrefix}buyall_
✍️ 🖤💵 _${usedPrefix}transfer *<tipo> <cantidad> <@tag>*_
✍️ 🖤💵 _${usedPrefix}verificar_
✍️ 🖤💵 _${usedPrefix}unreg *<numero de serie>*_

☆━━━━━━━━━━━━━━━━━━━☆
*<𝕊𝕋𝕀ℂ𝕂𝔼ℝ𝕊/>*

✍️ 🖤👽 _${usedPrefix}sticker *<responder a imagen o video>*_
✍️ 🖤👽 _${usedPrefix}sticker *<enlace / link / url>*_
✍️ 🖤👽 _${usedPrefix}s *<responder a imagen o video>*_
✍️ 🖤👽 _${usedPrefix}s *<enlace / link / url>*_
✍️ 🖤👽 _${usedPrefix}emojimix *<emoji 1>&<emoji 2>*_
✍️ 🖤👽 _${usedPrefix}scircle *<responder a imagen>*_
✍️ 🖤👽 _${usedPrefix}sremovebg *<responder a imagen>*_
✍️ 🖤👽 _${usedPrefix}semoji *<tipo> <emoji>*_
✍️ 🖤👽 _${usedPrefix}attp *<texto>*_
✍️ 🖤👽 _${usedPrefix}attp2 *<texto>*_
✍️ 🖤👽 _${usedPrefix}ttp *<texto>*_
✍️ 🖤👽 _${usedPrefix}ttp2 *<texto>*_
✍️ 🖤👽 _${usedPrefix}ttp3 *<texto>*_
✍️ 🖤👽 _${usedPrefix}ttp4 *<texto>*_
✍️ 🖤👽 _${usedPrefix}ttp5 *<texto>*_
✍️ 🖤👽 _${usedPrefix}pat *<@tag>*_
✍️ 🖤👽 _${usedPrefix}slap *<@tag>*_
✍️ 🖤👽 _${usedPrefix}kiss *<@tag>*_
✍️ 🖤👽 _${usedPrefix}dado_
✍️ 🖤👽 _${usedPrefix}wm *<packname> <author>*_
✍️ 🖤👽 _${usedPrefix}stickermarker *<efecto> <responder a imagen>*_
✍️ 🖤👽 _${usedPrefix}stickerfilter *<efecto> <responder a imagen>*_

☆━━━━━━━━━━━━━━━━━━━☆
*<𝕆𝕎ℕ𝔼ℝ 𝕐 𝕄𝕆𝔻𝔼ℝ𝔸𝔻𝕆ℝ𝔼𝕊/>*

✍️ 🖤👑 _${usedPrefix}cajafuerte_
✍️ 🖤👑 _${usedPrefix}enable *restrict*_
✍️ 🖤👑 _${usedPrefix}disable *restrict*_
✍️ 🖤👑 _${usedPrefix}enable *autoread*_
✍️ 🖤👑 _${usedPrefix}disable *autoread*_
✍️ 🖤👑 _${usedPrefix}enable *public*_
✍️ 🖤👑 _${usedPrefix}disable *public*_
✍️ 🖤👑 _${usedPrefix}enable *pconly*_
✍️ 🖤👑 _${usedPrefix}disable *pconly*_
✍️ 🖤👑 _${usedPrefix}enable *gconly*_
✍️ 🖤👑 _${usedPrefix}disable *gconly*_
✍️ 🖤👑 _${usedPrefix}banchat_
✍️ 🖤👑 _${usedPrefix}unbanchat_
✍️ 🖤👑 _${usedPrefix}banuser *<@tag>*_
✍️ 🖤👑 _${usedPrefix}unbanuser *<@tag>*_
✍️ 🖤👑 _${usedPrefix}banuser *<@tag>*_
✍️ 🖤👑 _${usedPrefix}bc *<texto>*_
✍️ 🖤👑 _${usedPrefix}bcchats *<texto>*_
✍️ 🖤👑 _${usedPrefix}bcgc *<texto>*_
✍️ 🖤👑 _${usedPrefix}cleartpm_
✍️ 🖤👑 _${usedPrefix}restart_
✍️ 🖤👑 _${usedPrefix}update_
✍️ 🖤👑 _${usedPrefix}addprem *<@tag>*_
✍️ 🖤👑 _${usedPrefix}delprem *<@tag>*_
✍️ 🖤👑 _${usedPrefix}listprem_
`.trim()
conn.sendHydrated2(m.chat, str, wm, pp, 'https://www.paypal.me/siestaymarin', '𝙿𝙰𝚈𝙿𝙰𝙻', 'https://github.com/BrunoSobrino/TheMystic-Bot-MD', '𝗞𝘂𝗿𝘂𝗺𝗶𝗕𝗼𝘁_𝗠𝗗', [
['📮 𝙳𝙾𝙽𝙰𝚁 📮', '/donasi'],
['🌹 𝙾𝚆𝙽𝙴𝚁 🌹', '/owner'],
['🐾 𝙸𝙽𝙵𝙾𝙱𝙾𝚃 🐾', '/infobot']
], m,)
await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true})
} catch (e) {
conn.reply(m.chat, '*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝙻 𝙼𝙴𝙽𝚄 𝚃𝙸𝙴𝙽𝙴 𝚄𝙽 𝙴𝚁𝚁𝙾𝚁 𝚈 𝙽𝙾 𝙵𝚄𝙴 𝙿𝙾𝚂𝙸𝙱𝙻𝙴 𝙴𝙽𝚅𝙸𝙰𝚁𝙻𝙾, 𝚁𝙴𝙿𝙾𝚁𝚃𝙴𝙻𝙾 𝙰𝙻 𝙿𝚁𝙾𝙿𝙸𝙴𝚃𝙰𝚁𝙸𝙾 𝙳𝙴𝙻 𝙱𝙾𝚃*', m)
throw e
}}
handler.command = /^(menu|menucompleto|help3|memú|help|info|comandos|allmenu|2help|menu1.2|ayuda|commands|commandos)$/i
handler.exp = 50
handler.fail = null
export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
