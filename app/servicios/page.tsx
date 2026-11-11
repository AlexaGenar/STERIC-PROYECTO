import type { Metadata } from 'next'
import { BadgeCheck, FileCheck2, Microscope } from 'lucide-react'
import { CTASection } from '@/components/cta-section'
import { PageIntro } from '@/components/page-intro'
import { SectionHeading } from '@/components/section-heading'
import { ServicesCatalog } from '@/components/services-catalog'
import { CustomerExperiences } from '@/components/customer-experiences'

export const metadata: Metadata = {
  title: 'Servicios',
  description: 'Pruebas de salas limpias, validación de equipos y asesoría de ingeniería para laboratorios y hospitales.',
}

const qualityPillars = [
  {
    title: 'Equipos de vanguardia',
    description: 'Instrumentación seleccionada y verificada para obtener mediciones confiables.',
    icon: Microscope,
  },
  {
    title: 'Reportes técnicos',
    description: 'Resultados trazables, comprensibles y útiles para la toma de decisiones.',
    icon: FileCheck2,
  },
  {
    title: 'Independencia e imparcialidad',
    description: 'Criterio objetivo y transparencia en cada evaluación realizada.',
    icon: BadgeCheck,
  },
]

export default function ServicesPage() {
  return (
    <>
      <PageIntro
        eyebrow="Ingeniería & validación"
        title="Nuestros"
        highlight="servicios"
        description="Soluciones técnicas integrales diseñadas bajo los más estrictos estándares internacionales de calidad y bioseguridad."
        image="/images/service-cleanroom.png"
        imageAlt="Técnico especializado realizando pruebas en una sala limpia"
        imageCaption="Verificación técnica para entornos críticos"
      />

      <section className="section-block services-page-section">
        <div className="site-container">
          <SectionHeading
            eyebrow="Portafolio especializado"
            title="Servicios para operaciones críticas"
            description="Desde la validación de salas limpias hasta la supervisión de ingeniería compleja, brindamos acompañamiento técnico en cada etapa de su proyecto industrial o médico."
          />
          <ServicesCatalog />
        </div>
      </section>

      <section className="section-block quality-section" id="calidad">
        <div className="site-container">
          <SectionHeading
            eyebrow="Nuestro enfoque"
            title="Nuestro enfoque en la calidad"
            description="La calidad se expresa en la preparación, ejecución y trazabilidad de cada servicio."
            centered
          />
          <div className="quality-grid">
            {qualityPillars.map((pillar) => {
              const Icon = pillar.icon
              return (
                <article className="quality-card" key={pillar.title}>
                  <span className="quality-icon"><Icon size={21} aria-hidden="true" /></span>
                  <h3>{pillar.title}</h3>
                  <p>{pillar.description}</p>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <CustomerExperiences kind="Servicio" />

      <CTASection
        title="¿Necesita una evaluación técnica?"
        description="Cuéntenos sobre sus espacios, equipos y objetivos. Le ayudaremos a definir el alcance adecuado."
      />
    </>
  )
}
