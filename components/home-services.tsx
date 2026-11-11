import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { ServiceCard } from '@/components/service-card'
import { services } from '@/lib/site-data'

export function HomeServices() {
  return (
    <section className="section-block home-services-section">
      <div className="site-container">
        <div className="section-heading-row">
          <SectionHeading
            eyebrow="Experiencia técnica"
            title="Servicios especializados"
            description="Soluciones integrales de ingeniería clínica e industrial, enfocadas en la verificación del desempeño de áreas críticas y equipos de precisión."
          />
          <Link className="text-link section-heading-link" href="/servicios">
            Ver todos los servicios <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
        <div className="service-grid service-grid-featured">
          {services.slice(0, 3).map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </div>
    </section>
  )
}
