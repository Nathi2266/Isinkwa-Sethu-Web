/** South African mobile: +27 XX XXXX XXX (9 national digits). */
export const SA_PHONE_NATIONAL_LENGTH = 9

const NATIONAL_PATTERN = /^\d{2} \d{4} \d{3}$/

/** Strip to national digits (drops leading 0 or 27 if pasted). */
export function extractSaNationalDigits(input) {
  let digits = String(input ?? '').replace(/\D/g, '')
  if (digits.startsWith('27')) digits = digits.slice(2)
  if (digits.startsWith('0')) digits = digits.slice(1)
  return digits.slice(0, SA_PHONE_NATIONAL_LENGTH)
}

/** National digits → "81 4714 565" (editable part after +27). */
export function formatSaPhoneNational(nationalDigits) {
  const d = extractSaNationalDigits(nationalDigits)
  if (!d) return ''
  let out = d.slice(0, 2)
  if (d.length > 2) out += ` ${d.slice(2, 6)}`
  if (d.length > 6) out += ` ${d.slice(6, 9)}`
  return out
}

/** Full display value sent to API: "+27 81 4714 565". */
export function formatSaPhoneFull(nationalDigits) {
  const part = formatSaPhoneNational(nationalDigits)
  return part ? `+27 ${part}` : '+27 '
}

export function isCompleteSaPhone(nationalDigits) {
  return extractSaNationalDigits(nationalDigits).length === SA_PHONE_NATIONAL_LENGTH
}

export function isValidSaPhoneFull(value) {
  const trimmed = String(value ?? '').trim()
  if (!trimmed.startsWith('+27 ')) return false
  const national = formatSaPhoneNational(trimmed.slice(4))
  return NATIONAL_PATTERN.test(national)
}

export function nationalDigitsFromFull(value) {
  return extractSaNationalDigits(String(value ?? '').replace(/^\+27\s?/, ''))
}
