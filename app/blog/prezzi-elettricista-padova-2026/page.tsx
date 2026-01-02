import type { Metadata } from 'next';
import Link from 'next/link';
import PhoneLinkWrapper from './PhoneLinkWrapper';

export const metadata: Metadata = {
  title: 'Prezzi Elettricista Padova 2026: Quanto Costa?',
  description: 'Prezzi aggiornati 2026 per elettricista a Padova. Tariffe orarie, listino interventi, costi pronto intervento 24h. Confronta e risparmia.',
  keywords: ['elettricista Padova', 'prezzi elettricista 2026', 'costo elettricista Veneto', 'tariffe elettricista PD', 'preventivo elettrico Padova', 'pronto intervento elettricista'],
};

export default function BlogPost() {
  return (
    <main className="min-h-screen">
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="mb-6">Prezzi Elettricista Padova 2026: Quanto Costa?</h1>
            <p className="text-sm opacity-75">Pubblicato il 02/01/2026</p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          {/* Table of Contents */}
          <nav className="mb-12 p-6 bg-gray-50 rounded-xl">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Indice</h2>
            <ul className="space-y-2">
              <li><a href="#tariffe-orarie" className="text-primary-600 hover:underline">Tariffe Orarie 2026</a></li>
              <li><a href="#listino-prezzi" className="text-primary-600 hover:underline">Listino Prezzi Completo</a></li>
              <li><a href="#emergenze" className="text-primary-600 hover:underline">Costi Pronto Intervento</a></li>
              <li><a href="#risparmiare" className="text-primary-600 hover:underline">Come Risparmiare</a></li>
              <li><a href="#faq" className="text-primary-600 hover:underline">Domande Frequenti</a></li>
            </ul>
          </nav>

          <article className="prose prose-lg max-w-none">
            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              Stai cercando un elettricista a Padova e vuoi sapere quanto costa? In questa guida trovi i <strong>prezzi aggiornati 2026</strong> per tutti i tipi di intervento, dalle riparazioni semplici al rifacimento completo dell&apos;impianto. Prezzi reali, senza sorprese.
            </p>

            <h2 id="tariffe-orarie" className="text-2xl font-bold text-gray-900 mt-10 mb-6">Tariffe Orarie Elettricista Padova 2026</h2>

            <p className="text-gray-700 mb-6">
              Nel Nord Italia, le tariffe orarie sono mediamente del 20-40% superiori rispetto al Sud. A Padova e provincia, ecco i costi medi:
            </p>

            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 p-3 text-left text-gray-900">Tipo Intervento</th>
                    <th className="border border-gray-300 p-3 text-left text-gray-900">Prezzo/Ora</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 p-3 text-gray-700">Manutenzione ordinaria</td>
                    <td className="border border-gray-300 p-3 text-gray-700">25-40 EUR</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 p-3 text-gray-700">Riparazioni complesse</td>
                    <td className="border border-gray-300 p-3 text-gray-700">40-60 EUR</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-3 text-gray-700">Elettricista specializzato</td>
                    <td className="border border-gray-300 p-3 text-gray-700">50-70 EUR</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 p-3 text-gray-700">Domotica e automazione</td>
                    <td className="border border-gray-300 p-3 text-gray-700">60-80 EUR</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-gray-700 mb-8">
              <strong>Nota:</strong> i materiali sono sempre quotati a parte. Un elettricista con oltre 10 anni di esperienza applica tariffe sui 50-70 EUR/ora.
            </p>

            <h2 id="listino-prezzi" className="text-2xl font-bold text-gray-900 mt-10 mb-6">Listino Prezzi Interventi Comuni</h2>

            <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Riparazioni e Sostituzioni</h3>
            <ul className="text-gray-700 space-y-2 mb-6">
              <li><strong>Sostituzione presa elettrica:</strong> 40-80 EUR (materiali inclusi)</li>
              <li><strong>Sostituzione interruttore:</strong> 30-60 EUR</li>
              <li><strong>Sostituzione punto luce:</strong> 30-60 EUR</li>
              <li><strong>Riparazione quadro elettrico:</strong> 80-200 EUR</li>
              <li><strong>Sostituzione salvavita:</strong> 100-180 EUR</li>
              <li><strong>Ricerca guasto:</strong> 60-120 EUR</li>
            </ul>

            <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Installazioni Nuove</h3>
            <ul className="text-gray-700 space-y-2 mb-6">
              <li><strong>Nuovo punto luce:</strong> 60-100 EUR</li>
              <li><strong>Nuova presa elettrica:</strong> 50-90 EUR</li>
              <li><strong>Installazione lampadario:</strong> 40-100 EUR</li>
              <li><strong>Ventilatore a soffitto:</strong> 100-180 EUR</li>
              <li><strong>Linea dedicata (condizionatore):</strong> 200-400 EUR</li>
            </ul>

            <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Impianti Completi</h3>
            <ul className="text-gray-700 space-y-2 mb-8">
              <li><strong>Rifacimento appartamento 80mq:</strong> 3.000-5.500 EUR</li>
              <li><strong>Impianto nuovo casa 120mq:</strong> 4.000-7.000 EUR</li>
              <li><strong>Messa a norma:</strong> 1.000-2.500 EUR</li>
              <li><strong>Wallbox ricarica auto (7,4 kW):</strong> 1.400-2.200 EUR</li>
            </ul>

            <h2 id="emergenze" className="text-2xl font-bold text-gray-900 mt-10 mb-6">Costi Pronto Intervento 24h</h2>

            <p className="text-gray-700 mb-6">
              Per le emergenze elettriche a Padova, i costi aumentano in base all&apos;orario. Ecco cosa aspettarsi:
            </p>

            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 p-3 text-left text-gray-900">Orario</th>
                    <th className="border border-gray-300 p-3 text-left text-gray-900">Chiamata</th>
                    <th className="border border-gray-300 p-3 text-left text-gray-900">Tariffa Oraria</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 p-3 text-gray-700">Diurno (8-18)</td>
                    <td className="border border-gray-300 p-3 text-gray-700">50-70 EUR</td>
                    <td className="border border-gray-300 p-3 text-gray-700">40-60 EUR</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 p-3 text-gray-700">Serale (18-22)</td>
                    <td className="border border-gray-300 p-3 text-gray-700">70-100 EUR</td>
                    <td className="border border-gray-300 p-3 text-gray-700">60-90 EUR</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-3 text-gray-700">Notturno/Festivi</td>
                    <td className="border border-gray-300 p-3 text-gray-700">100-150 EUR</td>
                    <td className="border border-gray-300 p-3 text-gray-700">90-150 EUR</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-gray-700 mb-8">
              Se hai un&apos;emergenza elettrica, leggi la nostra guida su <Link href="/blog/blackout-cosa-fare-padova" className="text-primary-600 hover:underline">cosa fare durante un blackout a Padova</Link>.
            </p>

            <h2 id="risparmiare" className="text-2xl font-bold text-gray-900 mt-10 mb-6">Come Risparmiare sui Lavori Elettrici</h2>

            <div className="bg-gray-50 p-6 rounded-xl mb-8">
              <h3 className="text-lg font-bold text-gray-900 mb-4">5 Consigli Pratici</h3>
              <ol className="text-gray-700 space-y-3">
                <li><strong>1. Pianifica gli interventi:</strong> evita le chiamate urgenti, costano il doppio</li>
                <li><strong>2. Raggruppa i lavori:</strong> piu interventi insieme = meno uscite = risparmio</li>
                <li><strong>3. Chiedi 2-3 preventivi:</strong> confronta, ma non scegliere solo il prezzo</li>
                <li><strong>4. Detrazioni fiscali:</strong> molti lavori godono del 50% di detrazione</li>
                <li><strong>5. Manutenzione preventiva:</strong> un controllo annuale evita emergenze costose</li>
              </ol>
            </div>

            <p className="text-gray-700 mb-8">
              Per un confronto con l&apos;anno precedente, consulta la nostra guida <Link href="/blog/prezzi-elettricista-padova-2025" className="text-primary-600 hover:underline">Prezzi Elettricista Padova 2025</Link>.
            </p>

            <h2 id="faq" className="text-2xl font-bold text-gray-900 mt-10 mb-6">Domande Frequenti</h2>

            <div className="space-y-6 mb-8">
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="font-bold text-gray-900 mb-2">Quanto costa chiamare un elettricista per un preventivo?</h3>
                <p className="text-gray-700">La maggior parte degli elettricisti a Padova offre sopralluogo e preventivo gratuito. Alcuni applicano un costo di 30-50 EUR che viene scalato dal lavoro finale.</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="font-bold text-gray-900 mb-2">Il prezzo include i materiali?</h3>
                <p className="text-gray-700">Generalmente no. La tariffa oraria copre la manodopera, i materiali sono fatturati a parte. Chiedi sempre un preventivo dettagliato che specifichi entrambi.</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="font-bold text-gray-900 mb-2">Quanto costa mettere a norma un vecchio impianto?</h3>
                <p className="text-gray-700">Per un appartamento di 80mq con impianto datato, la messa a norma costa tra 1.000 e 2.500 EUR. Include certificazione DM 37/08 obbligatoria.</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="font-bold text-gray-900 mb-2">Posso detrarre i costi dal 730?</h3>
                <p className="text-gray-700">Si, i lavori elettrici rientrano nel bonus ristrutturazioni con detrazione del 50% in 10 anni. Servono pagamento tracciabile e fattura.</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="font-bold text-gray-900 mb-2">Quanto tempo ci vuole per un intervento standard?</h3>
                <p className="text-gray-700">Una sostituzione presa richiede 20-30 minuti. Un nuovo punto luce 1-2 ore. Il rifacimento impianto di un appartamento richiede 3-5 giorni lavorativi.</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-6">Conclusione</h2>
            <p className="text-gray-700 mb-4">
              I prezzi per elettricista a Padova nel 2026 sono rimasti stabili rispetto all&apos;anno precedente. Per piccole riparazioni aspettati 50-150 EUR, per lavori complessi diverse migliaia di euro.
            </p>
            <p className="text-gray-700 mb-8">
              Ricorda: un lavoro fatto bene costa di piu inizialmente ma ti risparmia problemi e soldi nel lungo termine. Scegli sempre un elettricista abilitato e assicurato.
            </p>
          </article>

          <div className="mt-12 bg-gradient-to-br from-primary-600 to-primary-800 rounded-2xl p-8 text-white text-center">
            <h3 className="text-white mb-4 text-2xl font-bold">Richiedi un Preventivo Gratuito</h3>
            <p className="text-xl mb-6">Elettricisti qualificati a Padova. Interventi rapidi, prezzi trasparenti.</p>
            <PhoneLinkWrapper />
          </div>

          <div className="mt-12 text-center">
            <Link href="/blog" className="btn-secondary py-3 px-8 mr-4">
              Altri Articoli
            </Link>
            <Link href="/" className="btn-secondary py-3 px-8">
              Torna alla Home
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
