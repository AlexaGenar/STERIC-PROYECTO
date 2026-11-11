'use client'

import { useState, type FormEvent } from 'react'
import Link from 'next/link'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

const interestOptions = [
  'Validación de salas limpias',
  'Validación de equipos',
  'Equipamiento de laboratorio',
  'Asesoría en ingeniería',
  'Otra consulta',
]

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitted(true)
    event.currentTarget.reset()
  }

  return (
    <form className="form-card contact-form" onSubmit={handleSubmit}>
      <div className="form-card-header">
        <span className="form-icon"><CheckCircle2 size={18} aria-hidden="true" /></span>
        <div>
          <h2>Formulario de contacto</h2>
          <p>Complete los campos y un asesor se pondrá en contacto con usted.</p>
        </div>
      </div>

      <div className="form-fields">
        <div className="form-field-grid">
          <label className="form-field">
            <span>Nombre completo <em>*</em></span>
            <input className="form-control" type="text" name="name" autoComplete="name" placeholder="Ej. Juan Pérez" required />
          </label>
          <label className="form-field">
            <span>Correo electrónico <em>*</em></span>
            <input className="form-control" type="email" name="email" autoComplete="email" placeholder="juan@empresa.com" required />
          </label>
          <label className="form-field">
            <span>Empresa / institución</span>
            <input className="form-control" type="text" name="company" autoComplete="organization" placeholder="Nombre de la empresa" />
          </label>
          <label className="form-field">
            <span>Asunto de interés <em>*</em></span>
            <select className="form-control" name="interest" defaultValue="" required>
              <option value="" disabled>Seleccione un tema</option>
              {interestOptions.map((option) => <option key={option} value={option}>{option}</option>)}
            </select>
          </label>
        </div>

        <label className="form-field">
          <span>Mensaje <em>*</em></span>
          <textarea className="form-control form-textarea" name="message" rows={5} placeholder="Describa brevemente en qué podemos ayudarle..." required />
        </label>

        <label className="consent-row" id="privacy-policy">
          <input type="checkbox" name="privacy" required />
          <span>Acepto el tratamiento de mis datos personales según la <Link href="/contacto#privacy-policy">Política de Privacidad</Link> de STERIC S.R.L.</span>
        </label>

        {submitted ? (
          <p className="form-success" role="status" aria-live="polite">
            <CheckCircle2 size={18} aria-hidden="true" /> Gracias por contactarnos. Un asesor revisará su solicitud.
          </p>
        ) : null}
        <button className="btn-primary form-submit" type="submit">
          Enviar mensaje <ArrowRight size={17} aria-hidden="true" />
        </button>
      </div>
    </form>
  )
}
