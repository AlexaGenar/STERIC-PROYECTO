import type { Metadata } from 'next'
import { BadgeCheck, GraduationCap, Headphones, SlidersHorizontal } from 'lucide-react'
import { BrandCard } from '@/components/brand-card'
import { CTASection } from '@/components/cta-section'
import { PageIntro } from '@/components/page-intro'
import { SectionHeading } from '@/components/section-heading'
import { brands } from '@/lib/site-data'

export const metadata: Metadata = {
  title: 'Marcas',
  description: 'Fabricantes de referencia en mobiliario, instrumentación y equipamiento para laboratorios.',
}

const representationBenefits = [
  {
    title: 'Personalización',
    description: 'Configuramos cada solución según el espacio, los procesos y las necesidades de su equipo.',
    icon: SlidersHorizontal,
  },
  {
    title: 'Validación',
    description: 'Acompañamos la puesta en marcha con criterios de desempeño y documentación técnica.',
    icon: BadgeCheck,
  },
  {
    title: 'Capacitación',
    description: 'Compartimos conocimiento práctico para que las soluciones se aprovechen correctamente.',
    icon: GraduationCap,
  },
  {
    title: 'Postventa',
    description: 'Seguimos disponibles para orientar el mantenimiento y la continuidad operativa.',
    icon: Headphones,
  },
]

export default function BrandsPage() {
  return (
    <>
      <PageIntro
        eyebrow="Representaciones especializadas"
        title="Fabricantes que respaldan"
        highlight="la precisión"
        description="Colaboramos con marcas reconocidas para acercar tecnología confiable y soluciones especializadas a laboratorios de Costa Rica."
        image="/images/service-engineering.png"
        imageAlt="Equipo de ingeniería colaborando en la planificación de un laboratorio"
        imageCaption="Tecnología y asesoría en un solo equipo"
      />

      <section className="section-block brands-section">
        <div className="site-container">
          <SectionHeading
            eyebrow="Marcas representadas"
            title="Tecnología de fabricantes especializados"
            description="Una selección de aliados para cubrir distintas necesidades de diseño, medición y operación."
          />
          <div className="brand-grid">
            {brands.map((brand) => <BrandCard key={brand.name} brand={brand} />)}
          </div>
        </div>
      </section>

      <section className="section-block representation-section">
        <div className="site-container">
          <SectionHeading
            eyebrow="Acompañamiento integral"
            title="¿Por qué nuestras representaciones son diferentes?"
            description="No se trata solo de seleccionar un producto, sino de integrar una solución con soporte técnico local."
            centered
          />
          <div className="representation-grid">
            {representationBenefits.map((benefit) => {
              const Icon = benefit.icon
              return (
                <article className="representation-card" key={benefit.title}>
                  <span className="principle-icon"><Icon size={19} aria-hidden="true" /></span>
                  <h3>{benefit.title}</h3>
                  <p>{benefit.description}</p>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <CTASection
        title="Encuentre el equipo adecuado"
        description="Conversemos sobre la aplicación, las especificaciones y el espacio de su laboratorio."
      />
    </>
  )
}
