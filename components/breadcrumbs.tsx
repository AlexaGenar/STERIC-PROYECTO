import Link from 'next/link'
import { ChevronRight, Home } from 'lucide-react'

type BreadcrumbsProps = {
  current: string
}

export function Breadcrumbs({ current }: BreadcrumbsProps) {
  return (
    <nav className="breadcrumbs" aria-label="Migas de pan">
      <Link href="/">
        <Home size={15} aria-hidden="true" />
        Inicio
      </Link>

      <ChevronRight size={14} aria-hidden="true" />

      <span aria-current="page">{current}</span>
    </nav>
  )
}