import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, BadgeCheck, FlaskConical, ShieldCheck } from 'lucide-react'

const statistics = [
  { value: 'ISO 17025', label: 'Estándares' },
  { value: '15+ años', label: 'Experiencia' },
  { value: 'GMP / GLP', label: 'Cumplimiento' },
]

export function HomeHero() {
  return (
    <section className="home-hero">
      <div className="site-container home-hero-grid">
        <div className="home-hero-copy">
          <span className="eyebrow"><FlaskConical size={14} aria-hidden="true" /> Ingeniería de laboratorios & validación</span>
          <h1>Soluciones críticas para <span>entornos controlados</span></h1>
          <p>
            Especialistas en validación, diseño y equipamiento de laboratorios farmacéuticos,
            hospitalarios e industriales en Costa Rica.
          </p>
          <div className="hero-actions">
            <Link href="/cotizacion" className="btn-primary">
              Solicitar cotización <ArrowRight size={17} aria-hidden="true" />
            </Link>
            <Link href="/servicios" className="btn-secondary">Conocer servicios</Link>
          </div>
          <div className="hero-stat-row" aria-label="Experiencia y cumplimiento">
            {statistics.map((stat) => (
              <div className="hero-stat" key={stat.value}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="home-hero-image">
          <Image
            src="/images/hero-laboratory.png"
            alt="Especialistas trabajando en un laboratorio farmacéutico moderno"
            fill
            priority
            sizes="(max-width: 900px) 100vw, 52vw"
            className="cover-image"
          />
          <div className="hero-image-note">
            <span className="hero-note-icon"><ShieldCheck size={18} aria-hidden="true" /></span>
            <div>
              <strong>Calidad asegurada</strong>
              <span>Procedimientos alineados con estándares internacionales.</span>
            </div>
            <BadgeCheck className="hero-note-seal" size={23} aria-hidden="true" />
          </div>
          <span className="image-index">01 <span>/</span> 04</span>
        </div>
      </div>
    </section>
  )
}
