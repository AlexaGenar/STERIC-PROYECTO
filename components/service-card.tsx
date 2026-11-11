import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Check } from 'lucide-react'
import type { Service } from '@/lib/site-data'

export function ServiceCard({ service }: { service: Service }) {
  return (
    <article className="service-card surface-card">
      <div className="service-card-image">
        <Image
          src={service.image}
          alt={service.imageAlt}
          fill
          sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw"
          className="cover-image"
        />
        <span className="image-category">{service.category}</span>
      </div>
      <div className="service-card-body">
        <h3>{service.title}</h3>
        <p>{service.description}</p>
        <ul className="check-list">
          {service.features.slice(0, 3).map((feature) => (
            <li key={feature}><Check size={14} aria-hidden="true" /> {feature}</li>
          ))}
        </ul>
        <Link href="/cotizacion" className="card-action">
          Ver detalles técnicos <ArrowRight size={16} aria-hidden="true" />
        </Link>
      </div>
    </article>
  )
}
