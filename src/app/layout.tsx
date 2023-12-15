import './globals.css'

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import { ThreeCanvasProvider } from '@/components/three'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Next 14 boilerplate',
  description: 'A boilerplate for Next and React Three Fiber.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThreeCanvasProvider>{children}</ThreeCanvasProvider>
      </body>
    </html>
  )
}
