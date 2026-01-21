import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ 
  subsets: ['latin', 'cyrillic'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Мир бытовок – Производство, продажа и аренда бытовок',
  description: 'Производство и продажа бытовок от производителя. Аренда бытовок и манипулятора. Быстрая доставка по всей России. Собственное производство. Гарантия качества.',
  keywords: 'бытовки, аренда бытовок, купить бытовку, производство бытовок, манипулятор аренда, бытовки для проживания, бытовки офис, бытовки склад, блок-контейнеры',
  authors: [{ name: 'Мир бытовок' }],
  openGraph: {
    title: 'Мир бытовок – Производство, продажа и аренда бытовок',
    description: 'Быстрая доставка. Собственное производство. Гарантия качества.',
    type: 'website',
    locale: 'ru_RU',
    siteName: 'Мир бытовок',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru" className={inter.variable}>
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
