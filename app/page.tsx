import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'La Locanda del Mare - Ristorante & Hotel sul Mare | Valledoria, Sardegna',
  description: 'Ristorante e hotel sulla spiaggia La Ciaccia a Valledoria. Cucina di pesce, camere vista mare, tramonti mozzafiato. Prenota ora il tuo tavolo o la tua camera.',
  keywords: 'ristorante mare valledoria, hotel spiaggia sardegna, ristorante pesce valledoria, la ciaccia, locanda del mare',
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link href="/" className="flex items-center">
              <Image src="/logo.svg" alt="La Locanda del Mare" width={200} height={80} className="h-16 w-auto text-[#1a5f7a]" />
            </Link>

            <nav className="hidden md:flex space-x-8">
              <a href="#ristorante" className="text-gray-700 hover:text-[#1a5f7a] transition-colors font-medium">Ristorante</a>
              <a href="#camere" className="text-gray-700 hover:text-[#1a5f7a] transition-colors font-medium">Camere</a>
              <a href="#contatti" className="text-gray-700 hover:text-[#1a5f7a] transition-colors font-medium">Contatti</a>
            </nav>

            <div className="flex items-center space-x-4">
              <a href="tel:+390795184144" className="hidden sm:flex items-center text-[#1a5f7a] font-semibold hover:text-[#155060] transition-colors">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                079 584 144
              </a>
              <a
                href="https://locandadelmare.plateform.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#1a5f7a] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#155060] transition-all shadow-lg hover:shadow-xl"
              >
                Prenota Ora
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-sunset-terrace.jpg"
            alt="Terrazza sul mare al tramonto"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/50" />
        </div>

        <div className="relative h-full flex items-center justify-center text-center px-4">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-serif text-white mb-6 tracking-wide">
              Un&apos;Esperienza Indimenticabile
            </h1>
            <p className="text-xl md:text-2xl text-white/95 mb-8 font-light">
              Dove il mare incontra la tradizione culinaria sarda
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="https://locandadelmare.plateform.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-[#1a5f7a] px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all shadow-2xl text-lg"
              >
                Prenota un Tavolo
              </a>
              <a
                href="https://locandadelmare.plateform.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#1a5f7a] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#155060] transition-all shadow-2xl text-lg border-2 border-white"
              >
                Prenota una Camera
              </a>
            </div>
            <p className="mt-8 text-white/90 text-lg">
              Via Ugo Foscolo 11, La Ciaccia - Valledoria, Sardegna
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-6">
              Benvenuti alla Locanda del Mare
            </h2>
            <div className="w-24 h-1 bg-[#1a5f7a] mx-auto mb-8"></div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Situata sulla splendida spiaggia La Ciaccia a Valledoria, La Locanda del Mare offre
              un&apos;esperienza unica che combina cucina di pesce autentica, camere eleganti con vista mare,
              e tramonti mozzafiato sul Mediterraneo.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-[#1a5f7a]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-[#1a5f7a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Ristorante di Pesce</h3>
              <p className="text-gray-600">Cucina tradizionale sarda con pesce freschissimo del Mediterraneo</p>
            </div>

            <div className="text-center p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-[#1a5f7a]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-[#1a5f7a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Camere Vista Mare</h3>
              <p className="text-gray-600">Camere eleganti con vista panoramica sulla spiaggia</p>
            </div>

            <div className="text-center p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-[#1a5f7a]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-[#1a5f7a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Tramonti Mozzafiato</h3>
              <p className="text-gray-600">Cene romantiche con vista sul tramonto mediterraneo</p>
            </div>
          </div>
        </div>
      </section>

      {/* Restaurant Section */}
      <section id="ristorante" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-6">
                Il Nostro Ristorante
              </h2>
              <div className="w-24 h-1 bg-[#1a5f7a] mb-8"></div>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                La nostra cucina celebra i sapori autentici del Mediterraneo con pesce freschissimo pescato
                nelle acque cristalline della Sardegna.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-[#1a5f7a] mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-gray-700"><strong>Colazione:</strong> 7:30 - 11:00 (vista mare)</p>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-[#1a5f7a] mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-gray-700"><strong>Pranzo e Cena:</strong> Menu à la carte</p>
                </div>
              </div>

              <a
                href="https://locandadelmare.plateform.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#1a5f7a] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#155060] transition-all shadow-lg hover:shadow-xl"
              >
                Prenota il Tuo Tavolo
              </a>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="relative h-64 rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/images/seafood-dish.jpg"
                  alt="Cozze fresche"
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="relative h-64 rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/images/antipasto-pesce.jpg"
                  alt="Antipasto pesce"
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="col-span-2 relative h-80 rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/images/hero-sunset-terrace.jpg"
                  alt="Terrazza"
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rooms Section */}
      <section id="camere" className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-6">
              Camere & Soggiorno
            </h2>
            <div className="w-24 h-1 bg-[#1a5f7a] mx-auto mb-8"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 rounded-lg overflow-hidden shadow-2xl">
              <Image
                src="/images/hero-sunset-terrace.jpg"
                alt="Vista dalle camere"
                fill
                className="object-cover"
              />
            </div>

            <div>
              <div className="bg-white p-8 rounded-lg shadow-lg mb-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-semibold text-gray-900">Valutazione Eccellente</h3>
                  <div className="flex items-center">
                    <span className="text-3xl font-bold text-[#1a5f7a] mr-2">9.1</span>
                    <span className="text-gray-600">/10</span>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">Basato su 342 recensioni da Booking.com</p>
              </div>

              <a
                href="https://locandadelmare.plateform.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#1a5f7a] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#155060] transition-all shadow-lg hover:shadow-xl w-full text-center"
              >
                Verifica Disponibilità
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contatti" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-6">
              Contatti
            </h2>
            <div className="w-24 h-1 bg-[#1a5f7a] mx-auto mb-8"></div>
          </div>

          <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg">
            <div className="space-y-4">
              <div className="flex items-start">
                <svg className="w-6 h-6 text-[#1a5f7a] mr-4 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                </svg>
                <div>
                  <p className="font-semibold text-gray-900">Indirizzo</p>
                  <p className="text-gray-700">Via Ugo Foscolo 11, 07039 Valledoria (SS)</p>
                </div>
              </div>

              <div className="flex items-start">
                <svg className="w-6 h-6 text-[#1a5f7a] mr-4 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <div>
                  <p className="font-semibold text-gray-900">Telefono</p>
                  <a href="tel:+390795184144" className="text-[#1a5f7a] hover:text-[#155060] font-medium">
                    +39 079 584 144
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <svg className="w-6 h-6 text-[#1a5f7a] mr-4 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <div>
                  <p className="font-semibold text-gray-900">Email</p>
                  <a href="mailto:info@lalocandadelmare.it" className="text-[#1a5f7a] hover:text-[#155060] font-medium">
                    info@lalocandadelmare.it
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <a
              href="https://locandadelmare.plateform.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#1a5f7a] text-white px-12 py-5 rounded-full font-semibold hover:bg-[#155060] transition-all shadow-2xl text-xl"
            >
              Prenota Ora
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Image src="/logo.svg" alt="La Locanda del Mare" width={200} height={80} className="h-16 w-auto mb-4 brightness-0 invert mx-auto" />
          <p className="text-gray-400 mb-4">Dove il mare incontra la tradizione culinaria sarda</p>
          <p className="text-gray-500 text-sm">&copy; {new Date().getFullYear()} La Locanda del Mare. Tutti i diritti riservati.</p>
        </div>
      </footer>
    </div>
  );
}
