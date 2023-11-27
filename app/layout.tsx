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

export const metadata: Metadata = {
  title: {
    default: 'Excie - AI Phân Tích Dữ Liệu Tự Động',
    template: `%s - Excie - AI Phân Tích Dữ Liệu Tự Động`
  },
  description:
    'Bạn mất hàng giờ phân tích dữ liệu? Giờ đây chỉ cần vài giây Excie sẽ giúp bạn phân tích, trực quan hóa, thậm chí gợi ý tối ưu kết quả công việc cho bạn!',
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
      <Head>
        <meta
          name="google-site-verification"
          content="nLWL5HLR_pRPoOvsjLMWL80jvTuZkfGWINUcbIvYP9k"
        />
      </Head>
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
