import Image from 'next/image'
import { BadgeCheck, Eye, ShieldCheck, Target } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'

const principles = [
  {
    title: 'Visión',
    description: 'Ser reconocidos a nivel nacional e internacional por brindar servicios y productos de excelencia técnica.',
    icon: Eye,
  },
  {
    title: 'Independencia',
    description: 'Como empresa independiente, priorizamos la transparencia y el rigor en cada validación y certificación.',
    icon: ShieldCheck,
  },
  {
    title: 'Misión',
    description: 'Trabajamos en estrecha colaboración para ofrecer soluciones que garanticen la bioseguridad y la eficiencia operativa.',
    icon: Target,
  },
  {
    title: 'Valores',
    description: 'Nuestra cultura se fundamenta en honestidad, compromiso social, respeto e integridad profesional.',
    icon: BadgeCheck,
  },
]

export function HomeCommitment() {
  return (
    <section className="section-block commitment-section">
      <div className="site-container commitment-layout">
        <div className="commitment-intro">
          <SectionHeading
            eyebrow="Nuestro compromiso"
            title="Excelencia que protege lo esencial"
            description="En STERIC S.R.L., nos dedicamos a elevar los estándares de seguridad y precisión en los laboratorios de la región, proporcionando soporte técnico imparcial y de alta especialización."
          />
          <div className="commitment-photo">
            <Image
              src="/images/service-validation.png"
              alt="Profesional de laboratorio trabajando con precisión en un gabinete técnico"
              fill
              sizes="(max-width: 800px) 100vw, 34vw"
              className="cover-image"
            />
          </div>
        </div>
        <div className="principle-grid">
          {principles.map((principle) => {
            const Icon = principle.icon
            return (
              <article className="principle-card" key={principle.title}>
                <span className="principle-icon"><Icon size={19} aria-hidden="true" /></span>
                <h3>{principle.title}</h3>
                <p>{principle.description}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
