// Font CSS variables applied via globals.css @import
// In production, Google Fonts load via <link> in layout.tsx head
// Fallback to system fonts if Google Fonts unavailable

export const fontVariables = [
  '--font-display',
  '--font-heading', 
  '--font-body',
] as const

// System font fallback class for <body>
export const fontClassName = 'font-sans'
