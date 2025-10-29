export default function RealPhotosSection() {
  const photos = [
    {
      src: '/images/electrician-panel-work-milan.webp',
      alt: 'Elettricista al lavoro su quadro elettrico a Padova',
      caption: 'Intervento su impianto elettrico'
    },
    {
      src: '/images/electrician-wiring-hands-padova.webp',
      alt: 'Mani di elettricista che lavora su cablaggio a Padova',
      caption: 'Riparazione cablaggio elettrico'
    },
    {
      src: '/images/electrician-breaker-service-milan.webp',
      alt: 'Servizio salvavita e interruttori automatici a Padova',
      caption: 'Manutenzione salvavita'
    },
    {
      src: '/images/electrician-led-install-venice.webp',
      alt: 'Installazione luci LED in appartamento a Padova',
      caption: 'Installazione illuminazione LED'
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 text-gray-900">I Nostri Lavori Recenti</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Foto reali dei nostri interventi a Padova e provincia. Ogni lavoro è eseguito con professionalità e precisione.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {photos.map((photo, index) => (
            <div key={index} className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="aspect-[4/3] relative bg-gray-200">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                {/* Overlay with caption */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <p className="text-white font-medium p-4 text-sm">
                    {photo.caption}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust badge */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 bg-blue-50 border-2 border-blue-400 rounded-full px-6 py-3">
            <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
            </svg>
            <span className="font-bold text-gray-900">Foto reali dei nostri clienti soddisfatti</span>
            <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
              <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
