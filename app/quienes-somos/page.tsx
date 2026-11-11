import type { Metadata } from 'next'
import Link from 'next/link'
import { BadgeCheck, Eye, Scale, ShieldCheck, Target } from 'lucide-react'
import { CTASection } from '@/components/cta-section'
import { PageIntro } from '@/components/page-intro'
import { SectionHeading } from '@/components/section-heading'

export const metadata: Metadata = {
  title: 'Quiénes somos',
  description: 'Conozca la trayectoria, misión y valores de STERIC S.R.L., especialistas en ingeniería de laboratorios en Costa Rica.',
}

const principles = [
  {
    title: 'Visión',
    text: 'Ser un referente regional por la calidad técnica, independencia y confianza de nuestros servicios.',
    icon: Eye,
  },
  {
    title: 'Misión',
    text: 'Acompañar a cada cliente con soluciones especializadas que fortalezcan la seguridad y el desempeño de sus instalaciones.',
    icon: Target,
  },
  {
    title: 'Valores',
    text: 'Actuamos con integridad, respeto, rigor profesional y compromiso con cada proyecto que asumimos.',
    icon: BadgeCheck,
  },
  {
    title: 'Independencia e imparcialidad',
    text: 'Emitimos criterios técnicos objetivos, basados en métodos documentados y resultados verificables.',
    icon: Scale,
  },
]

export default function AboutPage() {
  return (
    <>
      <PageIntro
        eyebrow="Quiénes somos"
        title="Experiencia que genera"
        highlight="confianza."
        description="STERIC S.R.L. integra ingeniería especializada, validación y soluciones para laboratorios que trabajan bajo estándares exigentes."
        image="/images/service-engineering.png"
        imageAlt="Especialistas revisando planos de ingeniería en un laboratorio"
        imageCaption="Experiencia técnica al servicio de cada proyecto"
      />

      <section className="section-block story-section">
        <div className="site-container story-layout">
          <div>
            <span className="eyebrow">Nuestra trayectoria</span>
            <h2>Un socio técnico en cada etapa</h2>
            <p>
              A lo largo de más de 15 años, hemos acompañado a organizaciones farmacéuticas,
              hospitalarias e industriales en el diseño, verificación y mejora de sus espacios críticos.
            </p>
            <p>
              Nuestro enfoque combina conocimiento aplicado, documentación rigurosa y una relación cercana
              con cada equipo de trabajo, desde la planificación hasta el servicio posterior.
            </p>
          </div>
          <div className="story-stat-panel">
            <div className="story-stat-main">
              <span>Trayectoria especializada</span>
              <strong>15<span>+</span></strong>
              <small>años de experiencia técnica</small>
            </div>
            <div className="story-stat-side">
              <div><strong>4</strong><span>áreas de enfoque</span></div>
              <div><strong>CR</strong><span>cobertura nacional</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-block values-section">
        <div className="site-container">
          <SectionHeading
            eyebrow="Nuestra esencia"
            title="Principios que guían nuestro trabajo"
            description="La confianza se construye con consistencia, criterio técnico e independencia en cada decisión."
          />
          <div className="values-grid">
            {principles.map((principle) => {
              const Icon = principle.icon
              return (
                <article className="value-card surface-card" key={principle.title}>
                  <span className="principle-icon"><Icon size={20} aria-hidden="true" /></span>
                  <h3>{principle.title}</h3>
                  <p>{principle.text}</p>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="assurance-band">
        <div className="site-container assurance-inner">
          <span className="assurance-icon"><ShieldCheck size={22} aria-hidden="true" /></span>
          <div>
            <h2>Experiencia con criterio técnico</h2>
            <p>Trabajamos con procedimientos documentados, reportes claros y orientación práctica para su operación.</p>
          </div>
          <Link className="text-link" href="/servicios">Explorar servicios <BadgeCheck size={16} aria-hidden="true" /></Link>
        </div>
      </section>

      <CTASection
        title="Construyamos una solución a su medida"
        description="Nuestro equipo puede acompañarle desde la definición técnica hasta la puesta en marcha."
      />
    </>
  )
}
