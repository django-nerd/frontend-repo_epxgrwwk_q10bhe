import { useMemo, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Pricing from './components/Pricing'
import Contact from './components/Contact'

export default function App() {
  const [lang, setLang] = useState('en')

  const dict = useMemo(() => ({
    en: {
      tagline: 'Interactive map service',
      nav: { features: 'Features', pricing: 'Pricing', contact: 'Contact' },
      hero: {
        badge: 'Pastel, simple and clean',
        title: 'Bring maps to life for your product',
        subtitle: 'An elegant, interactive map service with seamless embeds, analytics and easy customization. Designed in a minimal white pastel theme for fintech and modern apps.',
      },
      cta: { primary: 'See pricing', secondary: 'Talk to us', getStarted: 'Get started' },
      features: {
        item1: { title: 'Embeddable maps', desc: 'Drop-in map widgets with custom layers, markers and themes.' },
        item2: { title: 'Fast & responsive', desc: 'Optimized rendering and smooth interactions across devices.' },
        item3: { title: 'Secure & private', desc: 'Granular controls and compliant data handling.' },
      },
      pricing: {
        title: 'Simple, transparent pricing',
        subtitle: 'Start free. Upgrade when you scale.',
        popular: 'Most popular',
        basic: { title: 'Starter', desc: 'For personal sites and prototypes.' },
        pro: { title: 'Pro', desc: 'For startups and teams that need more.' },
      },
      contact: {
        title: 'Contact & Support',
        subtitle: 'We’d love to hear about your use case. Our team replies within 24h.',
        support: { title: 'Support', desc: 'Priority assistance for Pro plans via email.' },
        hours: 'Mon–Fri, 9:00–18:00 UTC',
      },
      form: {
        name: 'Your name',
        email: 'Email address',
        message: 'How can we help?',
        send: 'Send message',
        sending: 'Sending…',
        sent: 'Thanks! We’ll be in touch shortly.',
        error: 'Something went wrong. Please try again.',
      }
    },
    es: {
      tagline: 'Servicio de mapas interactivos',
      nav: { features: 'Funciones', pricing: 'Precios', contact: 'Contacto' },
      hero: {
        badge: 'Pastel, simple y limpio',
        title: 'Da vida a los mapas para tu producto',
        subtitle: 'Un servicio de mapas interactivo y elegante con incrustaciones, analíticas y personalización sencilla. Diseñado en un tema pastel blanco para fintech y apps modernas.',
      },
      cta: { primary: 'Ver precios', secondary: 'Hablemos', getStarted: 'Comenzar' },
      features: {
        item1: { title: 'Mapas incrustables', desc: 'Widgets con capas, marcadores y temas personalizados.' },
        item2: { title: 'Rápido y adaptable', desc: 'Renderizado optimizado e interacciones fluidas en todos los dispositivos.' },
        item3: { title: 'Seguro y privado', desc: 'Controles granulares y tratamiento de datos conforme.' },
      },
      pricing: {
        title: 'Precios simples y transparentes',
        subtitle: 'Empieza gratis. Mejora cuando escales.',
        popular: 'Más popular',
        basic: { title: 'Inicial', desc: 'Para sitios personales y prototipos.' },
        pro: { title: 'Pro', desc: 'Para startups y equipos que necesitan más.' },
      },
      contact: {
        title: 'Contacto y Soporte',
        subtitle: 'Cuéntanos tu caso. Respondemos en menos de 24h.',
        support: { title: 'Soporte', desc: 'Asistencia prioritaria para planes Pro por email.' },
        hours: 'Lun–Vie, 9:00–18:00 UTC',
      },
      form: {
        name: 'Tu nombre',
        email: 'Correo electrónico',
        message: '¿Cómo podemos ayudarte?',
        send: 'Enviar mensaje',
        sending: 'Enviando…',
        sent: '¡Gracias! Te contactaremos pronto.',
        error: 'Algo salió mal. Inténtalo de nuevo.',
      }
    }
  }), [])

  const t = dict[lang]

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar lang={lang} setLang={setLang} t={{...t, tagline: t.tagline, nav: t.nav}} />
      <Hero t={t} />
      <Features t={t} />
      <Pricing t={t} />
      <Contact t={t} />
      <footer className="py-10 text-center text-slate-500 text-sm">© {new Date().getFullYear()} InteractMap</footer>
    </div>
  )
}
