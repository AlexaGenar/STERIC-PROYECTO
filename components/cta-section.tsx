import Link from 'next/link'
import { ArrowRight, MessageSquareText } from 'lucide-react'

type CTASectionProps = {
  title: string
  description: string
}

export function CTASection({ title, description }: CTASectionProps) {
  return (
    <section className="cta-section">
      <div className="site-container cta-inner">
        <div className="cta-copy">
          <span className="cta-kicker"><MessageSquareText size={15} aria-hidden="true" /> Hablemos de su proyecto</span>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <div className="cta-actions">
          <Link className="btn-primary btn-light" href="/cotizacion">
            Solicitar cotización <ArrowRight size={17} aria-hidden="true" />
          </Link>
          <Link className="btn-text-light" href="/contacto">Contáctenos</Link>
        </div>
      </div>
    </section>
  )
}
