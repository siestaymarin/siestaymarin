import { canLevelUp } from '../lib/levelling.js'
export function before(m) {
    let user = global.db.data.users[m.sender]
    if (!user.autolevelup)
        return !0
    let before = user.level * 1
    while (canLevelUp(user.level, user.exp, global.multiplier))
        user.level++

    if (before !== user.level) {
        m.reply(`
β οΈ πππππππ-πππ
βββ· *SUBISTE DE NIVEL*
β’ [${before}] β [${user.level}]
βββββββββββββββ
*_Cuanto mΓ‘s interactΓΊes con el bot, mayor serΓ‘ tu nivel_*
*Escribe .nivel para verificar*`.trim())
    }
}
export const disabled = false
