import type { Metadata } from 'next'
import { CTASection } from '@/components/cta-section'
import { HomeCategories } from '@/components/home-categories'
import { HomeCommitment } from '@/components/home-commitment'
import { HomeHero } from '@/components/home-hero'
import { HomeServices } from '@/components/home-services'

export const metadata: Metadata = {
  title: 'Inicio',
  description: 'Soluciones de validación, ingeniería y equipamiento especializado para laboratorios en Costa Rica.',
}

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <HomeCommitment />
      <HomeServices />
      <HomeCategories />
      <CTASection
        title="¿Listo para optimizar su infraestructura?"
        description="Conversemos sobre el desempeño, seguridad y equipamiento que necesita su laboratorio."
      />
    </>
  )
}
