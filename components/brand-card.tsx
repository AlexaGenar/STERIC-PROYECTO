import Link from 'next/link'
import { ArrowRight, Check } from 'lucide-react'
import type { Brand } from '@/lib/site-data'

export function BrandCard({ brand }: { brand: Brand }) {
  return (
    <article className="brand-card surface-card">
      <div className="brand-logo" aria-label={`Logotipo referencial de ${brand.name}`}>
        <span>{brand.name}</span>
      </div>
      <div className="brand-card-body">
        <div className="brand-country">{brand.country}</div>
        <p>{brand.description}</p>
        <ul className="check-list">
          {brand.specialties.map((specialty) => (
            <li key={specialty}><Check size={14} aria-hidden="true" /> {specialty}</li>
          ))}
        </ul>
        <Link href="/contacto" className="card-action">
          Conocer la marca <ArrowRight size={16} aria-hidden="true" />
        </Link>
      </div>
    </article>
  )
}
