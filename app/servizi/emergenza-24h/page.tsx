import { siteConfig } from '@/site.config';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pronto Intervento Elettricista 24/7 Padova | Emergenze Elettriche',
  description: 'Servizio di pronto intervento elettricista disponibile 24 ore su 24 a Padova. Intervento rapido entro 30-60 minuti per emergenze elettriche. Chiama ora!',
  keywords: 'pronto intervento elettricista padova, emergenza elettricista, elettricista 24 ore padova, guasto elettrico urgente',
};

export default function EmergenzaPage() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Pronto Intervento Elettricista 24/7',
    provider: {
      '@type': 'Electrician',
      name: siteConfig.businessName,
      telephone: siteConfig.phone,
      areaServed: {
        '@type': 'City',
        name: 'Padova',
      },
    },
    availableChannel: {
      '@type': 'ServiceChannel',
      serviceUrl: `https://${siteConfig.domain}/servizi/emergenza-24h`,
      servicePhone: siteConfig.phone,
    },
    hoursAvailable: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '00:00',
      closes: '23:59',
    },
  };

  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      {/* Hero Section */}
      <header className="bg-gradient-to-br from-red-600 to-red-800 text-white py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <nav className="mb-8">
            <a href="/" className="text-red-200 hover:text-white">← Torna alla Home</a>
          </nav>
          <div className="max-w-4xl">
            <div className="inline-block bg-yellow-400 text-red-900 px-4 py-2 rounded-full text-sm font-bold mb-6">
              🚨 SERVIZIO DISPONIBILE 24/7
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Pronto Intervento Elettricista Padova
            </h1>
            <p className="text-xl md:text-2xl text-red-100 mb-8">
              Emergenza elettrica? Interveniamo entro 30-60 minuti in tutta Padova e provincia. Servizio attivo 24 ore su 24, 7 giorni su 7.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={`tel:${siteConfig.phone}`}
                className="inline-flex items-center justify-center gap-3 bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-bold py-5 px-10 rounded-full text-xl transition-all duration-200 shadow-2xl transform hover:scale-105"
              >
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                CHIAMA ORA: {siteConfig.phone}
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* When to Call Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-4xl font-bold mb-12 text-center text-gray-900">
            Quando Chiamare il Pronto Intervento
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: '⚠️',
                title: 'Blackout Totale',
                description: 'Mancanza completa di corrente elettrica in casa o in azienda senza causa apparente.',
              },
              {
                icon: '🔥',
                title: 'Odore di Bruciato',
                description: 'Smell di bruciato proveniente da prese, interruttori o quadro elettrico.',
              },
              {
                icon: '💥',
                title: 'Scintille o Scossa',
                description: 'Scintille dalle prese elettriche o scossa elettrica toccando dispositivi o interruttori.',
              },
              {
                icon: '🔌',
                title: 'Prese Roventi',
                description: 'Prese o interruttori che diventano molto caldi al tatto.',
              },
              {
                icon: '💡',
                title: 'Luci che Tremolano',
                description: 'Luci che si accendono e spengono continuamente senza motivo.',
              },
              {
                icon: '⚡',
                title: 'Salvavita Che Scatta',
                description: 'Interruttore differenziale che scatta ripetutamente impedendo l\'utilizzo della corrente.',
              },
            ].map((item, index) => (
              <div key={index} className="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-6 border-2 border-red-200">
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{item.title}</h3>
                <p className="text-gray-700 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-4xl font-bold mb-4 text-center text-gray-900">
            Come Funziona il Nostro Servizio
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Procedura rapida ed efficiente per risolvere la tua emergenza elettrica
          </p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: '1',
                title: 'Chiamata',
                description: 'Chiami il nostro numero di emergenza e descrivi il problema',
              },
              {
                step: '2',
                title: 'Intervento',
                description: 'Il nostro elettricista arriva entro 30-60 minuti con attrezzatura completa',
              },
              {
                step: '3',
                title: 'Diagnosi',
                description: 'Identifichiamo rapidamente la causa del problema elettrico',
              },
              {
                step: '4',
                title: 'Risoluzione',
                description: 'Ripariamo il guasto e ripristiniamo la sicurezza del tuo impianto',
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-4xl font-bold mb-12 text-center text-gray-900">
            Costi del Pronto Intervento
          </h2>

          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Chiamata Emergenza</h3>
                <div className="text-4xl font-bold text-blue-600 mb-2">€50-80</div>
                <p className="text-gray-700">Costo base per l\'intervento di emergenza e diagnosi del problema</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Riparazione</h3>
                <div className="text-4xl font-bold text-blue-600 mb-2">Da €80</div>
                <p className="text-gray-700">Costo variabile in base alla complessità della riparazione necessaria</p>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 border-2 border-yellow-400 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-3 text-gray-900 flex items-center gap-2">
              <span>💰</span>
              Prezzi Trasparenti
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold">✓</span>
                <span>Preventivo chiaro prima di ogni intervento</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold">✓</span>
                <span>Nessun costo nascosto</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold">✓</span>
                <span>Accettiamo tutti i metodi di pagamento</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Coverage Area */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-blue-700 text-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-4xl font-bold mb-4 text-center">
            Zone Coperte dal Pronto Intervento
          </h2>
          <p className="text-xl text-blue-100 text-center mb-12">
            Interveniamo rapidamente in tutta Padova e provincia
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {siteConfig.serviceArea.neighborhoods.map((neighborhood, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center font-semibold">
                📍 {neighborhood}
              </div>
            ))}
          </div>

          <p className="text-center text-blue-100 mt-8 text-lg">
            Copriamo anche tutti i comuni della provincia di Padova
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-4xl font-bold mb-12 text-center text-gray-900">
            Domande Frequenti
          </h2>

          <div className="space-y-6">
            {[
              {
                question: 'Quanto tempo impiegate ad arrivare?',
                answer: 'Per le emergenze a Padova garantiamo un tempo di intervento di 30-60 minuti dalla chiamata, a seconda della zona e del traffico. I nostri elettricisti sono sempre pronti con mezzi attrezzati.',
              },
              {
                question: 'Siete disponibili anche di notte e nei festivi?',
                answer: 'Sì, il nostro servizio di pronto intervento è attivo 24 ore su 24, 7 giorni su 7, inclusi weekend e festivi. Le emergenze elettriche non aspettano!',
              },
              {
                question: 'Quanto costa un intervento notturno?',
                answer: 'Gli interventi notturni (dalle 22:00 alle 6:00) e nei festivi potrebbero avere un supplemento. Ti forniremo sempre un preventivo chiaro prima di iniziare il lavoro.',
              },
              {
                question: 'Cosa devo fare in attesa del vostro arrivo?',
                answer: 'Stacca l\'interruttore generale se percepisci pericolo. Non toccare cavi scoperti o prese danneggiate. Allontana bambini e animali dalla zona del guasto. Se c\'è odore di bruciato intenso, esci e chiama anche i vigili del fuoco.',
              },
              {
                question: 'Rilasciate la certificazione per l\'assicurazione?',
                answer: 'Sì, dopo ogni intervento rilasciamo tutta la documentazione necessaria per eventuali richieste assicurative, inclusi preventivi, fatture dettagliate e certificazioni tecniche.',
              },
            ].map((faq, index) => (
              <details key={index} className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-all group">
                <summary className="text-xl font-bold cursor-pointer list-none flex items-center justify-between text-gray-900">
                  <span>{faq.question}</span>
                  <svg className="w-6 h-6 transform group-open:rotate-180 transition-transform text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="mt-4 text-gray-700 leading-relaxed">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-red-600 to-red-800 text-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Hai un\'Emergenza Elettrica?
          </h2>
          <p className="text-xl md:text-2xl text-red-100 mb-10">
            Non aspettare! Chiama subito il nostro pronto intervento
          </p>

          <a
            href={`tel:${siteConfig.phone}`}
            className="inline-flex items-center justify-center gap-3 bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-bold py-6 px-12 rounded-full text-2xl transition-all duration-200 shadow-2xl transform hover:scale-105"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            {siteConfig.phone}
          </a>

          <p className="mt-8 text-red-100 text-lg">
            ⚡ Intervento rapido entro 30-60 minuti | 🔧 Tecnici certificati | 💰 Preventivo trasparente
          </p>
        </div>
      </section>
    </div>
  );
}
