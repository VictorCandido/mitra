import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Toaster } from "@/components/ui/sonner"
import { Suspense } from "react"
import { StructuredData } from "@/components/structured-data"
import "./globals.css"

export const metadata: Metadata = {
  title: {
    default: "Terraplenagem Mitra - Locações de Máquinas em Itupeva-SP",
    template: "%s | Terraplenagem Mitra"
  },
  description: "Especialistas em terraplenagem e locação de máquinas em Itupeva-SP. Aterros, escavações, infraestrutura e equipamentos modernos. 15+ anos de experiência. Solicite seu orçamento!",
  keywords: [
    "terraplenagem",
    "locação de máquinas",
    "Itupeva",
    "aterros",
    "escavações",
    "infraestrutura",
    "máquinas pesadas",
    "construção civil",
    "escavadeira",
    "retroescavadeira",
    "motoniveladora",
    "caminhão basculante"
  ],
  authors: [{ name: "Terraplenagem Mitra" }],
  creator: "Terraplenagem Mitra",
  publisher: "Terraplenagem Mitra",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://mitraterraplenagem.com.br'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Terraplenagem Mitra - Locações de Máquinas em Itupeva-SP",
    description: "Especialistas em terraplenagem e locação de máquinas em Itupeva-SP. Aterros, escavações, infraestrutura e equipamentos modernos. 15+ anos de experiência.",
    url: 'https://mitraterraplenagem.com.br',
    siteName: 'Terraplenagem Mitra',
    images: [
      {
        url: '/capa.jpeg',
        width: 1200,
        height: 630,
        alt: 'Terraplenagem Mitra - Equipamentos de terraplenagem em Itupeva-SP',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Terraplenagem Mitra - Locações de Máquinas em Itupeva-SP",
    description: "Especialistas em terraplenagem e locação de máquinas em Itupeva-SP. 15+ anos de experiência.",
    images: ['/capa.jpeg'],
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
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <StructuredData />
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
        <Toaster position="bottom-right" richColors />
      </body>
    </html>
  )
}
