import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Toluwap - Software Engineer & Developer',
  description: 'Professional software engineer specializing in modern web development, mobile applications, and innovative solutions. Explore my portfolio and connect with me.',
  keywords: 'software engineer, web developer, mobile developer, full-stack developer, JavaScript, React, Node.js, Python',
  authors: [{ name: 'Toluwalope Bamidele' }],
  creator: 'Toluwalope Bamidele',
  openGraph: {
    title: 'Toluwap - Software Engineer & Developer',
    description: 'Professional software engineer specializing in modern web development, mobile applications, and innovative solutions.',
    url: 'https://toluwap.dev',
    siteName: 'Toluwap',
    images: [
      {
        url: '/profile-pic.png',
        width: 1200,
        height: 630,
        alt: 'Toluwalope Bamidele - Software Engineer',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Toluwap - Software Engineer & Developer',
    description: 'Professional software engineer specializing in modern web development, mobile applications, and innovative solutions.',
    images: ['/profile-pic.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
