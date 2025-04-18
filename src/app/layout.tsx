import React from 'react'
import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import MainLayout from '../components/layout/MainLayout'

// Font configuration
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Dope BBQ - NYC Cultural Staple',
  description: 'Where food, music, and connection collide. A community experience that brings people together through soulful gatherings, good food, and genuine relationships.',
  keywords: ['BBQ', 'NYC', 'community', 'events', 'food', 'music', 'culture'],
  authors: [{ name: 'Dope BBQ Team' }],
  creator: 'Dope BBQ',
  publisher: 'Dope BBQ',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://dopebbq.com',
    title: 'Dope BBQ - NYC Cultural Staple',
    description: 'Where food, music, and connection collide. Join our community of food lovers, music enthusiasts, and culture seekers.',
    siteName: 'Dope BBQ',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dope BBQ - NYC Cultural Staple',
    description: 'Where food, music, and connection collide. Join our community of food lovers, music enthusiasts, and culture seekers.',
    creator: '@dopebbq',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-body antialiased">
        <MainLayout>
          {children}
        </MainLayout>
      </body>
    </html>
  )
} 