const STORAGE_KEY = 'isinkwa_theme'

function getInitialTheme() {
  const stored = localStorage.getItem(STORAGE_KEY)
  if (stored === 'light' || stored === 'dark') return stored
  return 'dark'
}

const theme = getInitialTheme()
const root = document.documentElement
root.classList.add(theme)
root.style.colorScheme = theme
