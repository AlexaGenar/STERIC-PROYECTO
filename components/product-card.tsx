import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Check } from 'lucide-react'
import type { Product } from '@/lib/site-data'

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="product-card surface-card">
      <div className="product-card-image">
        <Image
          src={product.image}
          alt={product.imageAlt}
          fill
          sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw"
          className="cover-image"
        />
      </div>
      <div className="product-card-body">
        <span className="product-category">{product.category}</span>
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <ul className="check-list product-check-list">
          {product.features.slice(0, 3).map((feature) => (
            <li key={feature}><Check size={14} aria-hidden="true" /> {feature}</li>
          ))}
        </ul>
        <Link href="/cotizacion" className="card-action">
          Ver detalles <ArrowRight size={16} aria-hidden="true" />
        </Link>
      </div>
    </article>
  )
}
