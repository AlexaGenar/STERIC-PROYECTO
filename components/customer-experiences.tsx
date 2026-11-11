import { Star } from 'lucide-react'
import { customerExperiences } from '@/lib/site-data'

export function CustomerExperiences({ kind }: { kind: 'Servicio' | 'Producto' }) {
  const experiences = customerExperiences.filter((experience) => experience.kind === kind)

  return (
    <section className="section-block experiences-section" aria-labelledby={`${kind.toLowerCase()}-experiences-title`}>
      <div className="site-container">
        <div className="section-heading section-heading-centered">
          <span className="eyebrow">Experiencias de clientes</span>
          <h2 id={`${kind.toLowerCase()}-experiences-title`}>Opiniones que apoyan la evaluación</h2>
          <p>
            Estas experiencias se presentan como ejemplos ilustrativos del contenido social definido en los wireframes.
          </p>
        </div>

        <div className="experience-grid">
          {experiences.map((experience) => (
            <article className="experience-card surface-card" key={`${experience.kind}-${experience.title}`}>
              <div className="experience-stars" aria-label={`${experience.rating} de 5 estrellas`}>
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star
                    key={index}
                    size={18}
                    aria-hidden="true"
                    className={index < experience.rating ? 'experience-star-active' : 'experience-star-inactive'}
                  />
                ))}
              </div>
              <blockquote>“{experience.quote}”</blockquote>
              <div className="experience-meta">
                <strong>{experience.title}</strong>
                <span>{experience.sector}</span>
              </div>
            </article>
          ))}
        </div>

        <p className="experience-note">Nota: testimonios y calificaciones ilustrativos para fines académicos.</p>
      </div>
    </section>
  )
}
