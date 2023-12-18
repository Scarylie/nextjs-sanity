import '~/styles/global.css'

import type { AppProps } from 'next/app'
import { Bebas_Neue } from 'next/font/google'
import { lazy } from 'react'

export interface SharedPageProps {
  draftMode: boolean
  token: string
}

const PreviewProvider = lazy(() => import('~/components/PreviewProvider'))

const sans = Bebas_Neue({
  variable: '--font-family-sans',
  style: ['normal'],
  subsets: ['latin'],
  weight: ['400'],
})

export default function App({
  Component,
  pageProps,
}: AppProps<SharedPageProps>) {
  const { draftMode, token } = pageProps
  return (
    <>
      <style jsx global>
        {`
          :root {
            --font-family-sans: ${sans.style.fontFamily};
          }
        `}
      </style>
      {draftMode ? (
        <PreviewProvider token={token}>
          <Component {...pageProps} />
        </PreviewProvider>
      ) : (
        <Component {...pageProps} />
      )}
    </>
  )
}
