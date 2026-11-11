import Link from 'next/link'
import { FlaskConical, Mail, MapPin, Phone } from 'lucide-react'
import { contactInfo } from '@/lib/site-data'

const footerGroups = [
  {
    title: 'Recursos',
    links: [
      { label: 'Portal de colaboradores', href: '/colaboradores' },
      { label: 'Normativas ISO', href: '/servicios' },
      { label: 'Solicitar cotización', href: '/cotizacion' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Política de privacidad', href: '/contacto#privacy-policy' },
      { label: 'Términos de servicio', href: '/contacto' },
      { label: 'Certificaciones', href: '/servicios#calidad' },
    ],
  },
]

export function SiteFooter() {
  return (
    <footer className="site-footer" id="site-footer">
      <div className="site-container footer-main">
        <div className="footer-company">
          <Link href="/" className="footer-brand" aria-label="STERIC S.R.L., ir al inicio">
            <span className="brand-mark-icon">
              <FlaskConical size={18} aria-hidden="true" />
            </span>
            <span>STERIC <span className="footer-brand-light">S.R.L.</span></span>
          </Link>
          <p>
            Ingeniería, validación y equipamiento especializado para laboratorios y entornos controlados.
          </p>
          <span className="footer-location"><MapPin size={15} aria-hidden="true" /> {contactInfo.city}</span>
        </div>

        <div className="footer-contact">
          <h2>Contacto</h2>
          <a href={`tel:${contactInfo.phoneLink}`}><Phone size={15} aria-hidden="true" /> {contactInfo.phone}</a>
          <a href={`mailto:${contactInfo.email}`}><Mail size={15} aria-hidden="true" /> {contactInfo.email}</a>
        </div>

        {footerGroups.map((group) => (
          <div className="footer-links" key={group.title}>
            <h2>{group.title}</h2>
            {group.links.map((link) => (
              <Link key={link.label} href={link.href}>{link.label}</Link>
            ))}
          </div>
        ))}
      </div>
      <div className="footer-bottom">
        <div className="site-container footer-bottom-inner">
          <p>© {new Date().getFullYear()} STERIC S.R.L. Todos los derechos reservados.</p>
          <p>Ingeniería para entornos que exigen confianza.</p>
        </div>
      </div>
    </footer>
  )
}
