import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, CheckCircle2, ClipboardCheck, Phone, ShieldCheck } from 'lucide-react'
import { QuoteForm } from '@/components/quote-form'
import { contactInfo } from '@/lib/site-data'

export const metadata: Metadata = {
  title: 'Solicitud de cotización',
  description: 'Solicite una propuesta técnica para servicios de validación, ingeniería y equipamiento de laboratorios.',
}

const processSteps = [
  { title: 'Recepción y análisis', text: 'Revisamos los requerimientos y la información técnica compartida.' },
  { title: 'Contacto de clarificación', text: 'Si es necesario, coordinamos una conversación para profundizar en los detalles.' },
  { title: 'Propuesta formal', text: 'Enviamos una propuesta detallada con el alcance y los próximos pasos.' },
]

export default function QuotePage() {
  return (
    <>
      <section className="quote-hero">
        <div className="site-container quote-hero-layout">
          <div className="quote-hero-copy">
            <span className="eyebrow">Propuesta sin compromiso</span>
            <h1>Solicitud de <span>cotización</span></h1>
            <p>Complete el formulario para recibir una propuesta técnica detallada y adaptada a los requerimientos específicos de su laboratorio o centro hospitalario.</p>
            <div className="quote-promise-row">
              <span><CheckCircle2 size={15} aria-hidden="true" /> Respuesta en menos de 48 h</span>
              <span><ShieldCheck size={15} aria-hidden="true" /> Asesoría experta técnica</span>
            </div>
          </div>
          <div className="quote-hero-visual">
            <Image
              src="/images/product-fume-hood.png"
              alt="Campana de extracción de laboratorio que representa el equipamiento especializado de STERIC"
              fill
              priority
              sizes="(max-width: 800px) 100vw, 38vw"
              className="cover-image"
            />
            <span className="quote-image-caption"><ClipboardCheck size={16} aria-hidden="true" /> Soluciones para entornos críticos</span>
          </div>
        </div>
      </section>

      <section className="section-block quote-main-section">
        <div className="site-container quote-layout">
          <QuoteForm />
          <aside className="quote-sidebar" aria-label="Proceso y atención directa">
            <section className="process-card">
              <span className="eyebrow">Nuestro proceso</span>
              <h2>¿Qué sucede después de enviar?</h2>
              <ol className="process-list">
                {processSteps.map((step, index) => (
                  <li key={step.title}>
                    <span className="process-number">{index + 1}</span>
                    <div><h3>{step.title}</h3><p>{step.text}</p></div>
                  </li>
                ))}
              </ol>
            </section>

            <section className="direct-contact-card">
              <span className="direct-contact-icon"><Phone size={17} aria-hidden="true" /></span>
              <div>
                <h2>Atención directa</h2>
                <p>Para consultas urgentes o proyectos de gran escala, llámenos directamente.</p>
                <a className="direct-phone" href={`tel:${contactInfo.phoneLink}`}>{contactInfo.phone}</a>
                <a className="direct-email" href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
              </div>
              <Link href="/contacto" className="sidebar-link">Ir a página de contacto <ArrowRight size={14} aria-hidden="true" /></Link>
            </section>

            <div className="quote-trust-grid">
              <div><ShieldCheck size={19} aria-hidden="true" /><strong>Cumplimiento</strong><span>Enfoque técnico</span></div>
              <div><CheckCircle2 size={19} aria-hidden="true" /><strong>Experiencia</strong><span>Más de 15 años</span></div>
            </div>
          </aside>
        </div>
      </section>
    </>
  )
}
