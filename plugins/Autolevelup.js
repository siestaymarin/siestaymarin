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
☠️ 𝐃𝐀𝐓𝐀𝐎𝐍𝐄-𝐁𝐎𝐓
┌─⊷ *SUBISTE DE NIVEL*
▢ [${before}] → [${user.level}]
└──────────────
*_Cuanto más interactúes con el bot, mayor será tu nivel_*
*Escribe .nivel para verificar*`.trim())
    }
}
export const disabled = false
