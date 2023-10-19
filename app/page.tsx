import { nanoid } from '@/lib/utils'
import { Chat } from '@/components/chat'
import Script from 'next/script'

export const runtime = 'edge'

export default function IndexPage() {
  const id = nanoid()

  return (
    <>
      <div className="container">
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-G0X8SZ83XE" />
        <Script id="google-analytics">
          {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'G-G0X8SZ83XE');
    `}
        </Script>
      </div>
      <Chat id={id} />
    </>
  )
}
