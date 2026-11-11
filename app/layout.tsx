import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'STERIC S.R.L. | Ingeniería y validación de laboratorios',
    template: '%s | STERIC S.R.L.',
  },
  description: 'Especialistas en validación, ingeniería y equipamiento de laboratorios farmacéuticos, hospitalarios e industriales en Costa Rica.',
  generator: 'Next.js',
  icons: {
    icon: '/icon.svg',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#f8fafc',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" data-scroll-behavior="smooth">
      <body className="antialiased">
        <a className="skip-link" href="#main-content">Saltar al contenido</a>
        <SiteHeader />
        <main id="main-content">{children}</main>
        <SiteFooter />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
