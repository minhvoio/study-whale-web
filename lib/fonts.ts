import {
  JetBrains_Mono as FontMono,
  Inter as FontSans,
  Grandstander
} from 'next/font/google'

export const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans'
})

export const fontMono = FontMono({
  subsets: ['latin'],
  variable: '--font-mono'
})

export const fontDisplay = Grandstander({
  subsets: ['latin'],
  variable: '--font-display'
})
