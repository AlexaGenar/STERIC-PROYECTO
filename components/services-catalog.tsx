'use client'

import { useMemo, useState } from 'react'
import { Search } from 'lucide-react'
import { ServiceCard } from '@/components/service-card'
import { services } from '@/lib/site-data'

function normalize(value: string) {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLocaleLowerCase('es')
}

export function ServicesCatalog() {
  const [searchTerm, setSearchTerm] = useState('')

  const filteredServices = useMemo(() => {
    const query = normalize(searchTerm.trim())
    if (!query) return services

    return services.filter((service) => {
      const searchable = [
        service.title,
        service.category,
        service.description,
        ...service.features,
        ...(service.aliases ?? []),
      ]
        .map(normalize)
        .join(' ')

      return searchable.includes(query)
    })
  }, [searchTerm])

  return (
    <>
      <div className="service-search-panel">
        <div>
          <strong>Buscar un servicio</strong>
          <span>Puede usar el nombre completo o siglas técnicas como BSC, CFL, FHL o Cleanroom Testing.</span>
        </div>
        <label className="catalog-search service-search">
          <Search size={17} aria-hidden="true" />
          <span className="sr-only">Buscar servicios por nombre, sigla o término relacionado</span>
          <input
            type="search"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
            placeholder="Ej. BSC, flujo laminar, salas limpias..."
          />
        </label>
      </div>

      <p className="sr-only" role="status" aria-live="polite">
        {filteredServices.length} {filteredServices.length === 1 ? 'servicio encontrado' : 'servicios encontrados'}
      </p>

      {filteredServices.length > 0 ? (
        <div className="service-grid">
          {filteredServices.map((service) => <ServiceCard key={service.title} service={service} />)}
        </div>
      ) : (
        <div className="catalog-empty" role="status">
          <Search size={22} aria-hidden="true" />
          <h3>No encontramos servicios</h3>
          <p>Pruebe con otra sigla, un nombre descriptivo o un término relacionado.</p>
          <button type="button" className="btn-secondary" onClick={() => setSearchTerm('')}>
            Limpiar búsqueda
          </button>
        </div>
      )}
    </>
  )
}
