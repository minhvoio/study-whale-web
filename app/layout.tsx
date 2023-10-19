import { Metadata } from 'next'

import { Toaster } from 'react-hot-toast'

import '@/app/globals.css'
import { fontMono, fontSans } from '@/lib/fonts'
import { cn } from '@/lib/utils'
import { TailwindIndicator } from '@/components/tailwind-indicator'
import { Providers } from '@/components/providers'
import { Header } from '@/components/header'
import { ReduxProvider } from '@/app/redux/provider'

export const metadata: Metadata = {
  title: {
    default: 'Excie - Your AI-Powered Data Ally',
    template: `%s - Excie - Your AI-Powered Data Ally`
  },
  description: 'Your AI-Powered Data Ally.',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' }
  ],
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png'
  }
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          'font-sans antialiased',
          fontSans.variable,
          fontMono.variable
        )}
      >
        <Toaster />
        <ReduxProvider>
          <Providers attribute="class" forcedTheme="light">
            <div className="flex flex-col min-h-screen">
              {/* @ts-ignore */}
              <Header />
              <main className="flex flex-col flex-1 bg-slate-100">
                {children}
              </main>
            </div>
            {/* <TailwindIndicator /> */}
          </Providers>
        </ReduxProvider>
      </body>
    </html>
  )
}
