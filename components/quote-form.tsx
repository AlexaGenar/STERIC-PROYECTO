'use client'

import { useState, type ChangeEvent, type FormEvent } from 'react'
import Link from 'next/link'
import { ArrowRight, CheckCircle2, CircleAlert } from 'lucide-react'

const serviceOptions = [
  'Pruebas de rendimiento',
  'Validación de salas limpias',
  'Mobiliario de laboratorio',
  'Sistemas de extracción',
  'Monitoreo ambiental',
  'Bioseguridad',
]

type QuoteFormValues = {
  name: string
  company: string
  email: string
  phone: string
  requestType: string
  priority: string
  services: string[]
  description: string
  privacy: boolean
}

const initialValues: QuoteFormValues = {
  name: '',
  company: '',
  email: '',
  phone: '',
  requestType: '',
  priority: 'Normal',
  services: [],
  description: '',
  privacy: false,
}

export function QuoteForm() {
  const [values, setValues] = useState<QuoteFormValues>(initialValues)
  const [serviceError, setServiceError] = useState('')
  const [submitted, setSubmitted] = useState(false)

  function handleFieldChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    const { name, value } = event.currentTarget
    setValues((current) => ({ ...current, [name]: value }))
    setSubmitted(false)
  }

  function handleServiceChange(event: ChangeEvent<HTMLInputElement>) {
    const { checked, value } = event.currentTarget
    setValues((current) => ({
      ...current,
      services: checked
        ? [...current.services, value]
        : current.services.filter((service) => service !== value),
    }))
    setServiceError('')
    setSubmitted(false)
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (values.services.length === 0) {
      setServiceError('Seleccione al menos un servicio de interés.')
      return
    }

    setServiceError('')
    setSubmitted(true)
    setValues(initialValues)
  }

  return (
    <form className="form-card quote-form" onSubmit={handleSubmit}>
      <div className="quote-form-heading">
        <span className="form-section-index">01</span>
        <div>
          <h2>Información del proyecto</h2>
          <p>Comparta los detalles necesarios para preparar una cotización precisa.</p>
        </div>
      </div>

      <fieldset className="form-fieldset">
        <legend>Datos de contacto</legend>
        <div className="form-field-grid">
          <label className="form-field">
            <span>Nombre completo <em>*</em></span>
            <input className="form-control" type="text" name="name" autoComplete="name" value={values.name} onChange={handleFieldChange} placeholder="Ej. Juan Pérez" required />
          </label>
          <label className="form-field">
            <span>Empresa / institución <em>*</em></span>
            <input className="form-control" type="text" name="company" autoComplete="organization" value={values.company} onChange={handleFieldChange} placeholder="Nombre de su organización" required />
          </label>
          <label className="form-field">
            <span>Correo electrónico corporativo <em>*</em></span>
            <input className="form-control" type="email" name="email" autoComplete="email" value={values.email} onChange={handleFieldChange} placeholder="nombre@empresa.cr" required />
          </label>
          <label className="form-field">
            <span>Teléfono de contacto <em>*</em></span>
            <input className="form-control" type="tel" name="phone" autoComplete="tel" value={values.phone} onChange={handleFieldChange} placeholder="+506 2200 0000" pattern="[+]?[0-9\s()\-]{7,}" title="Ingrese un número telefónico válido." required />
          </label>
        </div>
      </fieldset>

      <fieldset className="form-fieldset">
        <legend>Detalles del requerimiento</legend>
        <div className="form-field-grid">
          <label className="form-field">
            <span>Tipo de solicitud <em>*</em></span>
            <select className="form-control" name="requestType" value={values.requestType} onChange={handleFieldChange} required>
              <option value="" disabled>Seleccione el tipo de solicitud</option>
              <option>Servicios de validación e ingeniería</option>
              <option>Equipamiento</option>
              <option>Mantenimiento</option>
              <option>Consultoría</option>
            </select>
          </label>
          <label className="form-field">
            <span>Prioridad</span>
            <select className="form-control" name="priority" value={values.priority} onChange={handleFieldChange}>
              <option>Normal</option>
              <option>Alta</option>
              <option>Urgente</option>
            </select>
          </label>
        </div>

        <fieldset
          className={`interest-fieldset${serviceError ? ' interest-fieldset-error' : ''}`}
          aria-invalid={Boolean(serviceError)}
          aria-describedby={serviceError ? 'services-error' : undefined}
        >
          <legend>Servicios de interés <em>*</em></legend>
          <div className="interest-options">
            {serviceOptions.map((service) => (
              <label className="interest-option" key={service}>
                <input
                  type="checkbox"
                  name="services"
                  value={service}
                  checked={values.services.includes(service)}
                  onChange={handleServiceChange}
                />
                <span>{service}</span>
              </label>
            ))}
          </div>
          {serviceError ? <span id="services-error" className="field-error" role="alert">{serviceError}</span> : null}
        </fieldset>

        <label className="form-field">
          <span>Descripción detallada del requerimiento <em>*</em></span>
          <textarea
            className="form-control form-textarea quote-description"
            name="description"
            value={values.description}
            onChange={handleFieldChange}
            rows={5}
            placeholder="Describa brevemente las especificaciones técnicas, cantidad de equipos o dimensiones del área a intervenir..."
            required
          />
          <small>Entre más detalles proporcione, más precisa será nuestra oferta inicial.</small>
        </label>
      </fieldset>

      <label className="consent-row quote-consent">
        <input
          type="checkbox"
          name="privacy"
          checked={values.privacy}
          onChange={(event) => {
            const checked = event.currentTarget.checked
            setValues((current) => ({ ...current, privacy: checked }))
            setSubmitted(false)
          }}
          required
        />
        <span>Acepto la <Link href="/contacto#privacy-policy">política de privacidad</Link> y el tratamiento de mis datos para fines comerciales de STERIC S.R.L.</span>
      </label>

      {submitted ? (
        <p className="form-success" role="status" aria-live="polite">
          <CheckCircle2 size={18} aria-hidden="true" /> Solicitud enviada correctamente. Nuestro equipo revisará sus requerimientos y se pondrá en contacto con usted.
        </p>
      ) : null}
      <button className="btn-primary form-submit quote-submit" type="submit">
        Enviar solicitud <ArrowRight size={17} aria-hidden="true" />
      </button>
      <p className="form-disclaimer"><CircleAlert size={14} aria-hidden="true" /> Enviar este formulario no implica compromiso comercial.</p>
    </form>
  )
}
