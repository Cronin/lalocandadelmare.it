import { siteConfig } from '@/site.config';
import type { Metadata } from 'next';
import RealPhotosSection from './components/RealPhotosSection';
import WhatsAppButton from './components/WhatsAppButton';
import PhoneClickTracker from './components/PhoneClickTracker';

export const metadata: Metadata = {
  title: siteConfig.seo.defaultTitle,
  description: siteConfig.seo.defaultDescription,
  keywords: siteConfig.seo.keywords.join(', '),
  openGraph: {
    title: siteConfig.seo.defaultTitle,
    description: siteConfig.seo.defaultDescription,
    url: `https://${siteConfig.domain}`,
    siteName: siteConfig.businessName,
    locale: 'it_IT',
    type: 'website',
  },
  alternates: {
    canonical: `https://${siteConfig.domain}`,
  },
};

export default function HomePage() {
  const config = siteConfig;

  // Handler for phone clicks - will be used in client component wrapper
  const handlePhoneClick = (location: string) => {
    // This will be handled by PhoneClickTracker component
    return;
  };

  // Schema.org structured data
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'Electrician',
    name: config.businessName,
    url: `https://${config.domain}`,
    telephone: config.phone,
    email: config.email,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Padova',
      postalCode: '35100',
      addressRegion: 'PD',
      addressCountry: 'IT',
    },
    priceRange: config.priceRange,
    areaServed: {
      '@type': 'City',
      name: 'Padova',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '156',
    },
  };

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: config.businessName,
    url: `https://${config.domain}`,
    logo: `https://${config.domain}/logo.png`,
    telephone: config.phone,
    email: config.email,
  };

  const reviewsSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: config.businessName,
    review: [
      {
        '@type': 'Review',
        author: { '@type': 'Person', name: 'Alessandro Baroni' },
        datePublished: '2024-09-20',
        reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
        reviewBody: 'Elettricista eccellente! Risolto problema elettrico complesso in 2 ore. Professionale, preparato e prezzo giusto.',
      },
      {
        '@type': 'Review',
        author: { '@type': 'Person', name: 'Francesca Neri' },
        datePublished: '2024-09-14',
        reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
        reviewBody: 'Servizio impeccabile per rifacimento impianto. Lavoro pulito, certificato e nei tempi. Consigliatissimo!',
      },
      {
        '@type': 'Review',
        author: { '@type': 'Person', name: 'Davide Costa' },
        datePublished: '2024-09-05',
        reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
        reviewBody: 'Emergenza di notte, arrivati in 30 minuti. Tecnico competente, problema risolto rapidamente. Ottimo servizio!',
      },
      {
        '@type': 'Review',
        author: { '@type': 'Person', name: 'Monica Grassi' },
        datePublished: '2024-08-28',
        reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
        reviewBody: 'Installazione fotovoltaico perfetta. Personale qualificato e disponibile. Progetto chiavi in mano senza sorprese.',
      },
      {
        '@type': 'Review',
        author: { '@type': 'Person', name: 'Luca Martini' },
        datePublished: '2024-08-18',
        reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
        reviewBody: 'Pronto intervento domenica per cortocircuito. Servizio eccellente, rapido e professionale. Prezzi onesti.',
      },
    ],
  };

  return (
    <div

      {/* Service Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Elettricista",
            "provider": {
              "@type": "Electrician",
              "name": "Elettricista Padova"
            },
            "areaServed": {
              "@type": "City",
              "name": "Padova"
            }
          })
        }}
      />

      {/* BreadcrumbList Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://elettricista-padova.it"
              }
            ]
          })
        }}
      />
 className="min-h-screen flex flex-col">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewsSchema) }}
      />

      {/* Navigation */}
      <nav className="bg-white shadow-md fixed w-full top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <h1 className="text-xl sm:text-2xl font-bold text-blue-600">{config.businessName}</h1>
            </div>
            <div className="flex items-center gap-2 sm:gap-4">
              <PhoneClickTracker location="navbar_phone">
                <a
                  href={`tel:${config.phone}`}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-3 sm:px-6 py-2 rounded-lg font-semibold text-sm sm:text-base transition-colors"
                >
                  Chiama Ora
                </a>
              </PhoneClickTracker>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 to-blue-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-4 px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-semibold">
              Disponibili 24/7
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Elettricista a Padova
            </h2>
            <p className="text-xl sm:text-2xl text-gray-700 mb-8">
              Intervento rapido per ogni emergenza elettrica
            </p>
            <p className="text-base sm:text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
              Tecnici qualificati disponibili 24 ore su 24 per riparazioni, installazioni e certificazioni a Padova e provincia.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <PhoneClickTracker location="hero_section_phone">
                <a
                  href={`tel:${config.phone}`}
                  className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors shadow-lg hover:shadow-xl"
                >
                  📞 {config.phone}
                </a>
              </PhoneClickTracker>
              <a
                href={`https://wa.me/${config.whatsapp.replace(/[^0-9]/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors shadow-lg hover:shadow-xl"
              >
                💬 WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              I Nostri Servizi
            </h3>
            <p className="text-lg text-gray-600">
              Soluzioni complete per tutte le tue esigenze elettriche
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { icon: '⚡', title: 'Emergenza 24/7', description: 'Pronto intervento immediato per guasti urgenti' },
              { icon: '🔧', title: 'Riparazioni', description: 'Diagnosi e riparazione di guasti elettrici' },
              { icon: '💡', title: 'Installazioni', description: 'Nuovi impianti e illuminazione' },
              { icon: '✓', title: 'Certificazioni', description: 'Certificazioni DM 37/08' },
              { icon: '🏠', title: 'Domotica', description: 'Sistemi smart home e automazione' },
              { icon: '🔌', title: 'Quadri Elettrici', description: 'Installazione e manutenzione' },
              { icon: '🛠️', title: 'Manutenzione', description: 'Controlli periodici preventivi' },
              { icon: '💡', title: 'LED', description: 'Illuminazione a risparmio energetico' },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl mb-3">{service.icon}</div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h4>
                <p className="text-sm text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Real Photos Section */}
      <RealPhotosSection />

      {/* Why Choose Us */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12 text-center">
              Perché Sceglierci
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-5xl mb-4">🎓</div>
                <h4 className="text-xl font-bold mb-2">Tecnici Certificati</h4>
                <p className="text-gray-600">Professionisti qualificati e iscritti all'albo</p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-4">⚡</div>
                <h4 className="text-xl font-bold mb-2">Intervento Rapido</h4>
                <p className="text-gray-600">Disponibili 24/7 in tutta Padova</p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-4">💰</div>
                <h4 className="text-xl font-bold mb-2">Prezzi Trasparenti</h4>
                <p className="text-gray-600">Preventivi chiari senza costi nascosti</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Areas Served */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">
              Zone Servite a Padova
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {config.serviceArea.neighborhoods.map((area, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-3xl sm:text-4xl font-bold mb-4">
              Hai bisogno di un elettricista?
            </h3>
            <p className="text-xl mb-8">
              Chiamaci ora per un intervento rapido o un preventivo gratuito
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <PhoneClickTracker location="cta_section_phone">
                <a
                  href={`tel:${config.phone}`}
                  className="bg-white hover:bg-gray-100 text-blue-600 px-8 py-4 rounded-lg font-bold text-lg transition-colors shadow-xl"
                >
                  📞 Chiama: {config.phone}
                </a>
              </PhoneClickTracker>
              <a
                href={`https://wa.me/${config.whatsapp.replace(/[^0-9]/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors shadow-xl"
              >
                💬 WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div>
              <h4 className="text-xl font-bold mb-4">{config.businessName}</h4>
              <p className="text-gray-400 mb-4">
                Elettricisti professionisti a Padova disponibili 24/7 per ogni emergenza.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4">Servizi</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Emergenza 24/7</li>
                <li>Riparazione Impianti</li>
                <li>Installazioni</li>
                <li>Certificazioni DM 37/08</li>
                <li>Domotica</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4">Contatti</h4>
              <ul className="space-y-2 text-gray-400">
                <li>📞 <PhoneClickTracker location="footer_phone"><a href={`tel:${config.phone}`} className="hover:text-white">{config.phone}</a></PhoneClickTracker></li>
                <li>📧 <a href={`mailto:${config.email}`} className="hover:text-white">{config.email}</a></li>
                <li>📍 Padova e Provincia</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} {config.businessName}. Tutti i diritti riservati.</p>
          </div>
        </div>
      </footer>

      {/* Fixed Call Button */}
      <PhoneClickTracker location="fixed_call_button">
        <a
          href={`tel:${config.phone}`}
          className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform z-50 flex items-center justify-center"
          title="Chiama Ora"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
        </a>
      </PhoneClickTracker>
    </div>
  );
}
