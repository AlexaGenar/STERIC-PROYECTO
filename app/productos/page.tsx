import type { Metadata } from 'next'
import { PageIntro } from '@/components/page-intro'
import { ProductsCatalog } from '@/components/products-catalog'
import { CustomerExperiences } from '@/components/customer-experiences'

export const metadata: Metadata = {
  title: 'Productos',
  description: 'Catálogo de equipamiento y mobiliario técnico para laboratorios, salas limpias y entornos controlados.',
}

export default function ProductsPage() {
  return (
    <>
      <PageIntro
        eyebrow="Equipamiento especializado"
        title="Soluciones y productos"
        highlight="para laboratorios"
        description="Equipamiento especializado para laboratorios, entornos controlados y aplicaciones científicas. Trabajamos con fabricantes internacionales para ofrecer soluciones confiables, seguras y adaptadas a cada proyecto."
        image="/images/product-furniture.png"
        imageAlt="Mobiliario técnico modular instalado en un laboratorio"
        imageCaption="Equipamiento configurable para su operación"
      />
      <ProductsCatalog />
      <CustomerExperiences kind="Producto" />
    </>
  )
}
