import Image from 'next/image'
import { ShieldCheck } from 'lucide-react'
import type { ReactNode } from 'react'

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
}: PageIntroProps) {
  return (
    <section className={`page-intro${compact ? ' page-intro-compact' : ''}`}>
      <div className="site-container page-intro-grid">
        <div className="page-intro-copy">
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
