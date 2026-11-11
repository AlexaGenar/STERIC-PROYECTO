import type { Metadata } from 'next'
import { ArrowRight, Handshake, Mail, ShieldCheck, UsersRound } from 'lucide-react'
import Link from 'next/link'
import { PageIntro } from '@/components/page-intro'
import { PortalAccessButton } from '@/components/portal-access-button'
import { SectionHeading } from '@/components/section-heading'
import { collaborators } from '@/lib/site-data'

export const metadata: Metadata = {
  title: 'Colaboradores',
  description: 'Conozca las áreas de especialización de nuestro equipo y nuestras alianzas técnicas.',
}

const alliances = [
  { title: 'Fabricantes especializados', description: 'Relaciones técnicas con marcas líderes en equipamiento e instrumentación.', icon: Handshake },
  { title: 'Laboratorios y hospitales', description: 'Colaboración cercana con equipos que operan en entornos de alta exigencia.', icon: ShieldCheck },
  { title: 'Red de especialistas', description: 'Experiencia interdisciplinaria en ingeniería, validación y calidad.', icon: UsersRound },
]

export default function CollaboratorsPage() {
  return (
    <>
      <PageIntro
        eyebrow="Nuestro equipo"
        title="Personas que hacen posible"
        highlight="cada solución"
        description="Un equipo multidisciplinario une criterio técnico, conocimiento aplicado y atención cercana para acompañar los proyectos de nuestros clientes."
        image="/images/service-engineering.png"
        imageAlt="Equipo de especialistas planificando un proyecto de laboratorio"
        imageCaption="Colaboración técnica en cada etapa"
      />

      <section className="section-block team-section">
        <div className="site-container">
          <SectionHeading
            eyebrow="Áreas de especialización"
            title="Un equipo preparado para acompañarle"
            description="Conecte con el área adecuada para orientar su consulta o proyecto."
          />
          <div className="team-grid">
            {collaborators.map((person) => (
              <article className="team-card surface-card" key={person.name}>
                <div className="team-card-top">
                  <span className="team-avatar" aria-hidden="true">{person.initials}</span>
                  <span className="team-status"><span /> Equipo técnico</span>
                </div>
                <h3>{person.name}</h3>
                <p className="team-role">{person.role}</p>
                <p className="team-specialty">{person.specialty}</p>
                <a className="team-email" href={`mailto:${person.email}`}>
                  <Mail size={15} aria-hidden="true" /> {person.email}
                </a>
              </article>
            ))}
          </div>
          <p className="team-note">Los datos de contacto corresponden a áreas de atención institucional.</p>
        </div>
      </section>

      <section className="section-block alliances-section">
        <div className="site-container">
          <SectionHeading
            eyebrow="Alianzas estratégicas"
            title="Conocimiento que se conecta"
            description="Construimos relaciones de trabajo que permiten ofrecer una respuesta integral y sostenible."
            centered
          />
          <div className="alliance-grid">
            {alliances.map((alliance) => {
              const Icon = alliance.icon
              return (
                <article className="alliance-card" key={alliance.title}>
                  <span className="principle-icon"><Icon size={19} aria-hidden="true" /></span>
                  <h3>{alliance.title}</h3>
                  <p>{alliance.description}</p>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="portal-section">
        <div className="site-container portal-layout">
          <div className="portal-icon"><ShieldCheck size={25} aria-hidden="true" /></div>
          <div className="portal-copy">
            <span className="eyebrow">Acceso interno</span>
            <h2>Portal de empresa</h2>
            <p>Espacio reservado para recursos y comunicaciones de colaboradores autorizados.</p>
          </div>
          <div className="portal-action">
            <PortalAccessButton />
            <Link className="portal-contact-link" href="/contacto">¿Necesita acceso? Contáctenos <ArrowRight size={14} aria-hidden="true" /></Link>
          </div>
        </div>
      </section>
    </>
  )
}
