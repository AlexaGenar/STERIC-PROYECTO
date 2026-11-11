import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Clock3, Mail, MapPin, Phone, ArrowRight } from 'lucide-react'
import { ContactForm } from '@/components/contact-form'
import { SectionHeading } from '@/components/section-heading'
import { contactInfo } from '@/lib/site-data'

export const metadata: Metadata = {
  title: 'Contacto',
  description: 'Póngase en contacto con STERIC S.R.L. para consultas sobre validación, ingeniería y equipamiento de laboratorios.',
}

const contactCards = [
  {
    title: 'Ubicación central',
    description: 'Oficinas administrativas y taller técnico.',
    value: contactInfo.city,
    icon: MapPin,
  },
  {
    title: 'Teléfono',
    description: 'Lunes a viernes, 8:00 a. m. – 5:30 p. m.',
    value: contactInfo.phone,
    icon: Phone,
    href: `tel:${contactInfo.phoneLink}`,
  },
  {
    title: 'Correo electrónico',
    description: 'Respondemos en menos de 24 horas hábiles.',
    value: contactInfo.email,
    icon: Mail,
    href: `mailto:${contactInfo.email}`,
  },
  {
    title: 'Horario de atención',
    description: 'Atención de emergencias para clientes con contrato.',
    value: contactInfo.hours,
    icon: Clock3,
  },
]

export default function ContactPage() {
  return (
    <>
      <section className="contact-hero">
        <Image
          src="/images/service-engineering.png"
          alt="Equipo de especialistas conversando sobre un proyecto técnico"
          fill
          priority
          sizes="100vw"
          className="cover-image"
        />
        <div className="contact-hero-shade" />
        <div className="site-container contact-hero-content">
          <span className="eyebrow eyebrow-light">Atención al cliente</span>
          <h1>Hablemos de su próximo <span>proyecto.</span></h1>
          <p>Estamos a su disposición para resolver dudas técnicas o comerciales sobre nuestros servicios de validación y equipamiento de laboratorio.</p>
        </div>
      </section>

      <section className="section-block contact-main-section">
        <div className="site-container contact-layout">
          <div className="contact-info-column">
            <SectionHeading
              eyebrow="Información"
              title="Conecte con nuestros expertos"
              description="Nuestro equipo multidisciplinario de ingenieros y técnicos está preparado para brindarle la asesoría que necesita para sus proyectos."
            />
            <div className="contact-info-list">
              {contactCards.map((item) => {
                const Icon = item.icon
                const value = item.href ? (
                  <a href={item.href}>{item.value}</a>
                ) : (
                  <strong>{item.value}</strong>
                )
                return (
                  <article className="contact-info-card" key={item.title}>
                    <span className="contact-info-icon"><Icon size={18} aria-hidden="true" /></span>
                    <div>
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                      {value}
                    </div>
                  </article>
                )
              })}
            </div>
          </div>
          <ContactForm />
        </div>
      </section>

      <section className="region-section">
        <div className="site-container region-layout">
          <div className="region-copy">
            <span className="eyebrow">Nuestra presencia</span>
            <h2>Atendemos proyectos en todo Costa Rica</h2>
            <p>Nuestra sede central en San José nos permite brindar soporte oportuno a laboratorios, hospitales e industrias en todo el país.</p>
            <Link className="text-link" href="/cotizacion">Coordinar una visita técnica <ArrowRight size={16} aria-hidden="true" /></Link>
          </div>
          <div className="region-location-card">
            <div className="region-pattern" aria-hidden="true" />
            <span className="region-pin"><MapPin size={24} aria-hidden="true" /></span>
            <div className="region-location-details">
              <span>Sede central</span>
              <strong>San José, Costa Rica</strong>
              <small>Atención técnica y coordinación de proyectos</small>
            </div>
            <a href="https://maps.google.com/?q=San+Jos%C3%A9+Costa+Rica" target="_blank" rel="noreferrer">
              Ver en Google Maps <ArrowRight size={14} aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
