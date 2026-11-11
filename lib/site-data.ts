export const navigationItems = [
  { href: '/', label: 'Inicio' },
  { href: '/quienes-somos', label: 'Quiénes somos' },
  { href: '/servicios', label: 'Servicios' },
  { href: '/productos', label: 'Productos' },
  { href: '/marcas', label: 'Marcas' },
  { href: '/colaboradores', label: 'Colaboradores' },
  { href: '/contacto', label: 'Contacto' },
] as const

export const contactInfo = {
  city: 'San José, Costa Rica',
  phone: '+506 2200-0000',
  phoneLink: '+50622000000',
  email: 'contacto@steric.cr',
  hours: 'Lun – Vie, 8:00 a. m. – 5:30 p. m.',
}

export type Service = {
  category: string
  title: string
  description: string
  image: string
  imageAlt: string
  features: string[]
  aliases?: string[]
}

export const services: Service[] = [
  {
    category: 'Hospitalario',
    title: 'Pruebas de rendimiento de áreas hospitalarias',
    description: 'Evaluación técnica de sistemas HVAC y calidad de aire en entornos clínicos críticos.',
    image: '/images/service-validation.png',
    imageAlt: 'Especialista comprobando el funcionamiento de un gabinete de laboratorio',
    features: ['Muestreo de partículas', 'Caudales de aire', 'Presurización diferencial'],
  },
  {
    category: 'Consultoría',
    title: 'Asesoría y supervisión de ingeniería especializada',
    description: 'Consultoría experta para el diseño y validación de instalaciones industriales.',
    image: '/images/service-engineering.png',
    imageAlt: 'Consultores revisan planos para un proyecto de laboratorio',
    features: ['Validación de procesos', 'Revisión de planos', 'Gestión de riesgos'],
  },
  {
    category: 'Salas limpias',
    title: 'Pruebas de salas limpias',
    description: 'Certificación y validación de entornos controlados bajo estándares internacionales.',
    image: '/images/service-cleanroom.png',
    imageAlt: 'Técnico en traje de sala limpia realizando mediciones',
    features: ['Integridad de filtros HEPA', 'Patrones de flujo de aire', 'Conteo de partículas'],
    aliases: ['Cleanroom Testing', 'sala limpia', 'salas limpias'],
  },
  {
    category: 'Bioseguridad',
    title: 'Validación de gabinetes de bioseguridad',
    description: 'Verificación de contención y desempeño para proteger al personal, el producto y el ambiente.',
    image: '/images/service-validation.png',
    imageAlt: 'Validación técnica de un gabinete de bioseguridad',
    features: ['Velocidad de flujo', 'Integridad de filtros', 'Pruebas de contención'],
    aliases: ['BSC', 'Biosafety Cabinet', 'gabinete de bioseguridad', 'bioseguridad'],
  },
  {
    category: 'Flujo laminar',
    title: 'Validación de gabinetes de flujo laminar',
    description: 'Mediciones documentadas para confirmar condiciones de operación y protección del producto.',
    image: '/images/hero-laboratory.png',
    imageAlt: 'Trabajo especializado en un laboratorio farmacéutico',
    features: ['Uniformidad del flujo', 'Clasificación de partículas', 'Reporte técnico'],
    aliases: ['CFL', 'cabina de flujo laminar', 'gabinete de flujo laminar', 'flujo laminar'],
  },
  {
    category: 'Extracción',
    title: 'Validación de capillas de extracción de gases',
    description: 'Pruebas de desempeño y contención para sistemas de extracción localizada.',
    image: '/images/product-fume-hood.png',
    imageAlt: 'Campana de extracción instalada en un laboratorio',
    features: ['Velocidad frontal', 'Visualización de flujo', 'Verificación de alarmas'],
    aliases: ['FHL', 'Fume Hood', 'capilla de extracción', 'campana de extracción'],
  },
]

export const productCategories = [
  'Todos',
  'Campanas de extracción',
  'Instrumentación',
  'Mobiliario de laboratorio',
  'Módulos de servicio',
  'Mesadas',
  'Monitoreo ambiental',
] as const

export type Product = {
  category: Exclude<(typeof productCategories)[number], 'Todos'>
  name: string
  description: string
  image: string
  imageAlt: string
  features: string[]
}

export const products: Product[] = [
  {
    category: 'Campanas de extracción',
    name: 'Campana de Extracción Química High-Flow',
    description: 'Sistema de contención de alto rendimiento diseñado para la manipulación segura de reactivos.',
    image: '/images/product-fume-hood.png',
    imageAlt: 'Campana de extracción química de diseño moderno',
    features: ['Cumple normas de seguridad', 'Control digital de flujo', 'Vidrio templado de seguridad'],
  },
  {
    category: 'Instrumentación',
    name: 'Anemómetro digital de precisión',
    description: 'Instrumentación para medir y documentar velocidades de aire en aplicaciones críticas.',
    image: '/images/service-validation.png',
    imageAlt: 'Técnica utilizando un instrumento de medición en laboratorio',
    features: ['Lectura de alta precisión', 'Registro de mediciones', 'Diseño portátil'],
  },
  {
    category: 'Mobiliario de laboratorio',
    name: 'Estación de Trabajo Modular Flex-Lab',
    description: 'Solución versátil de mobiliario técnico con estructura autoportante y configuración flexible.',
    image: '/images/product-furniture.png',
    imageAlt: 'Mobiliario modular instalado en un laboratorio moderno',
    features: ['Estructura modular configurable', 'Resistencia química certificada', 'Gestión de cableado integrada'],
  },
  {
    category: 'Campanas de extracción',
    name: 'Brazo de Extracción Localizada Articulado',
    description: 'Sistema de captura en fuente para gases y humos, ideal para puestos específicos.',
    image: '/images/product-extraction-arm.png',
    imageAlt: 'Brazo articulado de extracción localizada sobre una mesa',
    features: ['Rotación de amplio alcance', 'Campana transparente de alta visibilidad', 'Válvula de regulación manual'],
  },
  {
    category: 'Módulos de servicio',
    name: 'Módulo de Servicios Integrado de Techo',
    description: 'Centro de suministros suspendido que optimiza el espacio de trabajo y facilita conexiones.',
    image: '/images/product-service-module.png',
    imageAlt: 'Panel técnico de servicio para instalaciones de laboratorio',
    features: ['Conexiones rápidas integradas', 'Diseño ergonómico', 'Fácil mantenimiento'],
  },
  {
    category: 'Mobiliario de laboratorio',
    name: 'Gabinete de Almacenamiento Bajo Mesada',
    description: 'Unidad de almacenamiento rodante diseñada para organizar el espacio de trabajo.',
    image: '/images/product-furniture.png',
    imageAlt: 'Módulos de almacenamiento de laboratorio bajo una mesada',
    features: ['Cierre suave de cajones', 'Ruedas con freno de seguridad', 'Resistencia a solventes'],
  },
  {
    category: 'Mesadas',
    name: 'Mesada técnica modular',
    description: 'Superficie de trabajo configurable para laboratorios de investigación y control de calidad.',
    image: '/images/product-furniture.png',
    imageAlt: 'Mesada técnica con superficie de trabajo en un laboratorio',
    features: ['Superficie de alta resistencia', 'Opciones de almacenamiento', 'Configuración a medida'],
  },
  {
    category: 'Monitoreo ambiental',
    name: 'Sistema de monitoreo ambiental',
    description: 'Soluciones para supervisar variables ambientales en espacios de operación controlada.',
    image: '/images/service-cleanroom.png',
    imageAlt: 'Monitoreo de condiciones ambientales en una sala limpia',
    features: ['Registro de parámetros', 'Alertas configurables', 'Trazabilidad de datos'],
  },
]

export type Brand = {
  name: string
  country: string
  description: string
  specialties: string[]
}

export const brands: Brand[] = [
  {
    name: 'WALDNER',
    country: 'Alemania',
    description: 'Diseño y fabricación de soluciones integrales para espacios de laboratorio.',
    specialties: ['Mobiliario técnico', 'Campanas de extracción', 'Proyectos llave en mano'],
  },
  {
    name: 'KANOMAX',
    country: 'Japón',
    description: 'Instrumentación de precisión para mediciones de aire y aplicaciones ambientales.',
    specialties: ['Anemometría', 'Conteo de partículas', 'Monitoreo ambiental'],
  },
  {
    name: 'CLIMET',
    country: 'Estados Unidos',
    description: 'Tecnología especializada para el monitoreo de partículas en entornos controlados.',
    specialties: ['Contadores de partículas', 'Monitoreo de salas limpias', 'Calidad del aire'],
  },
  {
    name: 'KALSTEIN',
    country: 'Francia',
    description: 'Equipamiento científico para laboratorios clínicos, académicos e industriales.',
    specialties: ['Equipos de laboratorio', 'Instrumentación', 'Soluciones científicas'],
  },
]

export const collaborators = [
  {
    name: 'Equipo de Validación',
    role: 'Ingeniería de validación',
    specialty: 'Salas limpias y bioseguridad',
    email: 'servicios@steric.cr',
    initials: 'EV',
  },
  {
    name: 'Equipo de Ingeniería',
    role: 'Consultoría especializada',
    specialty: 'Diseño y supervisión técnica',
    email: 'ingenieria@steric.cr',
    initials: 'EI',
  },
  {
    name: 'Equipo Comercial',
    role: 'Asesoría de soluciones',
    specialty: 'Equipamiento para laboratorios',
    email: 'contacto@steric.cr',
    initials: 'EC',
  },
]


export type CustomerExperience = {
  kind: 'Servicio' | 'Producto'
  title: string
  quote: string
  sector: string
  rating: number
}

export const customerExperiences: CustomerExperience[] = [
  {
    kind: 'Servicio',
    title: 'Validación de áreas críticas',
    quote: 'La información técnica fue clara y el proceso de solicitud permitió identificar rápidamente el servicio requerido.',
    sector: 'Laboratorio farmacéutico',
    rating: 5,
  },
  {
    kind: 'Servicio',
    title: 'Acompañamiento técnico',
    quote: 'La organización por tipo de validación facilita comparar alternativas antes de solicitar una cotización.',
    sector: 'Sector hospitalario',
    rating: 4,
  },
  {
    kind: 'Producto',
    title: 'Equipamiento de laboratorio',
    quote: 'La clasificación por categorías y características permite ubicar con mayor facilidad el equipo de interés.',
    sector: 'Laboratorio de control de calidad',
    rating: 5,
  },
  {
    kind: 'Producto',
    title: 'Mobiliario y almacenamiento',
    quote: 'La organización del catálogo ayuda a comparar opciones y entender mejor las características antes de cotizar.',
    sector: 'Laboratorio industrial',
    rating: 4,
  },
]
