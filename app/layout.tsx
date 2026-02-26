import type { Metadata, Viewport } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'

import './globals.css'

const _inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const _jetbrainsMono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-jetbrains-mono' })

export const metadata: Metadata = {
  title: 'Hithu Kdrama  - Watch Dramas & Series Online',
  description:
    'Stream your favorite dramas and TV series with multiple servers and subtitle options. Watch and download episodes for free.',

  verification: {
    google: "TSrfO4EGKp6Fei8bIaxaBBQTdAv07ab3PlS2k5Gvhuc",
  },
}

export const viewport: Viewport = {
  themeColor: '#0a0c14',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${_inter.variable} ${_jetbrainsMono.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}