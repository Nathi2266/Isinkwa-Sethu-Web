export function countWords(text) {
  const trimmed = String(text ?? '').trim()
  if (!trimmed) return 0
  return trimmed.split(/\s+/).length
}

/** Keeps at most maxWords words; preserves spacing between kept words. */
export function enforceMaxWords(text, maxWords) {
  if (countWords(text) <= maxWords) return text
  let words = 0
  let result = ''
  const tokens = String(text).split(/(\s+)/)
  for (const token of tokens) {
    if (/\S/.test(token)) {
      words += 1
      if (words > maxWords) break
    }
    result += token
  }
  return result.replace(/\s+$/, '')
}

export function enforceMaxChars(text, maxChars) {
  const s = String(text ?? '')
  return s.length <= maxChars ? s : s.slice(0, maxChars)
}
