'use client'

import { useMemo, useState } from 'react'
import { Search } from 'lucide-react'
import { productCategories, products } from '@/lib/site-data'
import { ProductCard } from '@/components/product-card'

export function ProductsCatalog() {
  const [activeCategory, setActiveCategory] = useState<(typeof productCategories)[number]>('Todos')
  const [searchTerm, setSearchTerm] = useState('')

  const filteredProducts = useMemo(() => {
    const normalizedSearch = searchTerm.trim().toLocaleLowerCase('es')

    return products.filter((product) => {
      const matchesCategory = activeCategory === 'Todos' || product.category === activeCategory
      const matchesSearch = product.name.toLocaleLowerCase('es').includes(normalizedSearch)
      return matchesCategory && matchesSearch
    })
  }, [activeCategory, searchTerm])

  return (
    <section className="section-block catalog-section" aria-labelledby="catalog-title">
      <div className="site-container">
        <div className="catalog-header">
          <div>
            <span className="eyebrow">Portafolio técnico</span>
            <h2 id="catalog-title">Equipamiento para cada necesidad</h2>
            <p>Explore soluciones configurables para espacios de trabajo exigentes.</p>
          </div>
          <label className="catalog-search">
            <Search size={17} aria-hidden="true" />
            <span className="sr-only">Buscar productos por nombre</span>
            <input
              type="search"
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              placeholder="Buscar productos..."
            />
          </label>
        </div>

        <div className="catalog-filters" role="group" aria-label="Filtrar productos por categoría">
          {productCategories.map((category) => (
            <button
              key={category}
              type="button"
              className={`filter-pill${activeCategory === category ? ' filter-pill-active' : ''}`}
              aria-pressed={activeCategory === category}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <p className="sr-only" role="status" aria-live="polite">
          {filteredProducts.length} {filteredProducts.length === 1 ? 'producto encontrado' : 'productos encontrados'}
        </p>
        {filteredProducts.length > 0 ? (
          <div className="product-grid">
            {filteredProducts.map((product) => (
              <ProductCard key={product.name} product={product} />
            ))}
          </div>
        ) : (
          <div className="catalog-empty" role="status">
            <Search size={22} aria-hidden="true" />
            <h3>No encontramos productos</h3>
            <p>Pruebe con otro término o seleccione una categoría diferente.</p>
            <button
              type="button"
              className="btn-secondary"
              onClick={() => { setSearchTerm(''); setActiveCategory('Todos') }}
            >
              Limpiar filtros
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
