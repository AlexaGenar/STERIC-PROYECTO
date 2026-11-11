import Link from 'next/link'
import { ArrowUpRight, Building2, ShieldCheck, Wind, Gauge } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'

const categories = [
  { name: 'Extracción de gases', detail: 'Captura segura en la fuente', icon: Wind },
  { name: 'Mobiliario técnico', detail: 'Diseño modular y ergonómico', icon: Building2 },
  { name: 'Monitoreo ambiental', detail: 'Control de variables críticas', icon: Gauge },
  { name: 'Bioseguridad', detail: 'Protección en cada proceso', icon: ShieldCheck },
]

export function HomeCategories() {
  return (
    <section className="section-block category-section">
      <div className="site-container">
        <SectionHeading
          eyebrow="Equipamiento especializado"
          title="Tecnología para trabajar con confianza"
          description="Integramos soluciones de fabricantes especializados, configuradas para el uso real de cada laboratorio."
        />
        <div className="category-grid">
          {categories.map((category, index) => {
            const Icon = category.icon
            return (
              <Link href="/productos" className="category-card" key={category.name}>
                <span className="category-number">0{index + 1}</span>
                <span className="category-icon"><Icon size={21} aria-hidden="true" /></span>
                <span className="category-card-copy">
                  <strong>{category.name}</strong>
                  <small>{category.detail}</small>
                </span>
                <ArrowUpRight className="category-arrow" size={17} aria-hidden="true" />
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
