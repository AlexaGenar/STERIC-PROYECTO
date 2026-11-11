'use client'

import { useState } from 'react'
import { ArrowRight, LockKeyhole } from 'lucide-react'

export function PortalAccessButton() {
  const [showNotice, setShowNotice] = useState(false)

  return (
    <div className="portal-access">
      <button type="button" className="btn-primary" onClick={() => setShowNotice(true)}>
        <LockKeyhole size={16} aria-hidden="true" /> Iniciar sesión <ArrowRight size={16} aria-hidden="true" />
      </button>
      {showNotice ? (
        <p className="portal-notice" role="status" aria-live="polite">
          Portal disponible únicamente para colaboradores autorizados.
        </p>
      ) : null}
    </div>
  )
}
