'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FlaskConical, Menu, X } from 'lucide-react'
import { useState } from 'react'
import { navigationItems } from '@/lib/site-data'

export function SiteHeader() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href)

  return (
    <header className="site-header">
      <div className="site-container header-inner">
        <Link
          href="/"
          className="brand-mark"
          aria-label="STERIC S.R.L., ir al inicio"
          onClick={() => setMobileOpen(false)}
        >
          <span className="brand-mark-icon">
            <FlaskConical size={19} strokeWidth={2.2} aria-hidden="true" />
          </span>
          <span className="brand-mark-name">STERIC <span>S.R.L.</span></span>
        </Link>

        <nav className="desktop-nav" aria-label="Navegación principal">
          {navigationItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`nav-link${isActive(item.href) ? ' nav-link-active' : ''}`}
              aria-current={isActive(item.href) ? 'page' : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          className="mobile-menu-toggle"
          aria-label={mobileOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={mobileOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMobileOpen((open) => !open)}
        >
          {mobileOpen ? <X size={21} aria-hidden="true" /> : <Menu size={21} aria-hidden="true" />}
        </button>
      </div>

      <nav
        id="mobile-navigation"
        className={`mobile-nav${mobileOpen ? ' mobile-nav-open' : ''}`}
        aria-label="Navegación para móvil"
        aria-hidden={!mobileOpen}
      >
        <div className="site-container mobile-nav-inner">
          {navigationItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`mobile-nav-link${isActive(item.href) ? ' mobile-nav-link-active' : ''}`}
              aria-current={isActive(item.href) ? 'page' : undefined}
              tabIndex={mobileOpen ? 0 : -1}
              onClick={() => setMobileOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/cotizacion"
            className="btn-primary mobile-quote-link"
            tabIndex={mobileOpen ? 0 : -1}
            onClick={() => setMobileOpen(false)}
          >
            Solicitar cotización
          </Link>
        </div>
      </nav>
    </header>
  )
}
