import { Metadata } from 'next'

import { Toaster } from 'react-hot-toast'
import Head from 'next/head'
import '@/app/globals.css'
import { fontMono, fontSans } from '@/lib/fonts'
import { cn } from '@/lib/utils'
import { TailwindIndicator } from '@/components/tailwind-indicator'
import { Providers } from '@/components/providers'
import { Header } from '@/components/header'
import { ReduxProvider } from '@/app/redux/provider'
import Script from 'next/script'

export const metadata: Metadata = {
  title: {
    default: 'Study Whale - Best Study Tools',
    template: `%s - Study Whale - Best Study Tools`
  },
  description:
    'GPA calculator, Study AI Helper, Pomodoro and more. Study Whale is the best study tool for students.',
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
    <html lang="en">
      {/* <Head>
        <meta
          name="google-site-verification"
          content="nLWL5HLR_pRPoOvsjLMWL80jvTuZkfGWINUcbIvYP9k"
        />
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-G0X8SZ83XE" />
        <Script id="google-analytics">
          {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'G-G0X8SZ83XE');
    `}
        </Script>
      </Head> */}
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
