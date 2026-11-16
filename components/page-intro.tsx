import Image from 'next/image'
import { ShieldCheck } from 'lucide-react'
import type { ReactNode } from 'react'
import Link from "next/link"
import { ChevronRight, Home } from "lucide-react"

type PageIntroProps = {
  eyebrow: string
  title: string
  highlight: string
  description: string
  image: string
  imageAlt: string
  imageCaption?: string
  compact?: boolean
  priority?: boolean
  children?: ReactNode
  breadcrumb?: string
}

export function PageIntro({
  eyebrow,
  title,
  highlight,
  description,
  image,
  imageAlt,
  imageCaption = 'Ingeniería y validación especializada',
  compact = false,
  priority = true,
  children,
  breadcrumb
}: PageIntroProps) {
  return (
    <section className={`page-intro${compact ? ' page-intro-compact' : ''}`}>
      <div className="site-container page-intro-grid">
        <div className="page-intro-copy">
         
         {breadcrumb && (
  <nav
    aria-label="Migas de pan"
    className="mb-5 flex items-center gap-2 text-sm text-slate-500"
  >
    <Link
      href="/"
      className="flex items-center gap-1 font-medium text-slate-700 transition hover:text-sky-500"
    >
      <Home className="h-4 w-4" />
      Inicio
    </Link>

    <ChevronRight className="h-4 w-4" />

    <span aria-current="page">
      {breadcrumb}
    </span>
  </nav>
)}
         <span className="eyebrow">{eyebrow}</span>
          <h1>{title}{' '}<span>{highlight}</span></h1>
          <p>{description}</p>
          {children ? <div className="page-intro-actions">{children}</div> : null}
        </div>
        <div className="page-intro-visual">
          <Image
            src={image}
            alt={imageAlt}
            fill
            priority={priority}
            sizes="(max-width: 900px) 100vw, 50vw"
            className="cover-image"
          />
          <div className="page-intro-caption">
            <span className="caption-icon"><ShieldCheck size={17} aria-hidden="true" /></span>
            <span>{imageCaption}</span>
          </div>
        </div>
      </div>
    </section>
  )
}
