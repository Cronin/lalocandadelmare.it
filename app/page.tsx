'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState, useRef } from 'react';

// Animated counter hook
function useCountUp(end: number, duration: number = 2000, start: number = 0) {
  const [count, setCount] = useState(start);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      setCount(Math.floor(progress * (end - start) + start));
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }, [isVisible, end, start, duration]);

  return { count, ref };
}

// Scroll animation hook
function useScrollAnimation() {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return { ref, isVisible };
}

export default function HomePage() {
  const [scrollY, setScrollY] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const rating = useCountUp(91, 2000, 0);
  const reviews = useCountUp(342, 2500, 0);
  const years = useCountUp(25, 1500, 0);

  const about = useScrollAnimation();
  const restaurant = useScrollAnimation();
  const rooms = useScrollAnimation();
  const gallery = useScrollAnimation();
  const contact = useScrollAnimation();

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Floating particles background */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-[#1a5f7a]/10 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${10 + Math.random() * 10}s`,
            }}
          />
        ))}
      </div>

      {/* Header with glassmorphism */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrollY > 50 ? 'bg-white/90 backdrop-blur-lg shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link href="/" className="flex items-center group">
              <div className={`transition-all duration-300 ${scrollY > 50 ? '' : 'brightness-0 invert'}`}>
                <Image src="/logo.svg" alt="La Locanda del Mare" width={180} height={70} className="h-14 w-auto" />
              </div>
            </Link>

            <nav className="hidden md:flex space-x-8">
              {['Ristorante', 'Camere', 'Galleria', 'Contatti'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className={`relative font-medium transition-colors group ${
                    scrollY > 50 ? 'text-gray-700 hover:text-[#1a5f7a]' : 'text-white hover:text-white/80'
                  }`}
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#1a5f7a] transition-all group-hover:w-full" />
                </a>
              ))}
            </nav>

            <div className="flex items-center space-x-4">
              <a
                href="tel:+39079584144"
                className={`hidden sm:flex items-center font-semibold transition-all hover:scale-105 ${
                  scrollY > 50 ? 'text-[#1a5f7a]' : 'text-white'
                }`}
              >
                <svg className="w-5 h-5 mr-2 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                079 584 144
              </a>
              <a
                href="https://locandadelmare.plateform.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-[#1a5f7a] to-[#2980b9] text-white px-6 py-3 rounded-full font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300 animate-shimmer"
              >
                Prenota Ora
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section with Parallax */}
      <section className="relative h-screen overflow-hidden">
        {/* Parallax background */}
        <div
          className="absolute inset-0 scale-110"
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        >
          <Image
            src="/images/hero-sunset-terrace.jpg"
            alt="Terrazza sul mare al tramonto"
            fill
            className="object-cover"
            priority
            quality={100}
          />
        </div>

        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />

        {/* Animated waves at bottom */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg className="w-full h-24 fill-white" viewBox="0 0 1440 120" preserveAspectRatio="none">
            <path className="animate-wave" d="M0,64 C288,89 576,24 864,64 C1152,104 1296,24 1440,64 L1440,120 L0,120 Z" opacity="0.3" />
            <path className="animate-wave-slow" d="M0,96 C288,64 576,104 864,80 C1152,56 1296,104 1440,80 L1440,120 L0,120 Z" opacity="0.5" />
            <path d="M0,104 C288,120 576,88 864,104 C1152,120 1296,88 1440,104 L1440,120 L0,120 Z" />
          </svg>
        </div>

        {/* Hero content with stagger animation */}
        <div className="relative h-full flex items-center justify-center text-center px-4">
          <div className="max-w-5xl">
            <p className="text-lg md:text-xl text-white/90 mb-4 tracking-[0.3em] uppercase animate-fade-in-down">
              Spiaggia La Ciaccia, Sardegna
            </p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-6 tracking-wide animate-fade-in-up">
              <span className="block">La Locanda</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-yellow-100">del Mare</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/95 mb-10 font-light animate-fade-in max-w-2xl mx-auto" style={{ animationDelay: '0.5s' }}>
              Dove il mare incontra la tradizione culinaria sarda
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up" style={{ animationDelay: '0.7s' }}>
              <a
                href="https://locandadelmare.plateform.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-white text-[#1a5f7a] px-10 py-4 rounded-full font-semibold text-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105"
              >
                <span className="relative z-10">Prenota un Tavolo</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#1a5f7a] to-[#2980b9] translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                <span className="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">Prenota un Tavolo</span>
              </a>
              <a
                href="https://locandadelmare.plateform.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-transparent text-white px-10 py-4 rounded-full font-semibold text-lg border-2 border-white hover:bg-white hover:text-[#1a5f7a] transition-all duration-300 hover:shadow-2xl hover:scale-105"
              >
                Prenota una Camera
              </a>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-32 left-1/2 -translate-x-1/2 animate-bounce">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-[#1a5f7a] to-[#2980b9] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/2 translate-y-1/2" />
        </div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div ref={rating.ref} className="group">
              <div className="text-6xl font-bold mb-2 group-hover:scale-110 transition-transform">
                {(rating.count / 10).toFixed(1)}
              </div>
              <div className="text-xl opacity-90">Valutazione Booking</div>
              <div className="flex justify-center mt-2">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
            <div ref={reviews.ref} className="group">
              <div className="text-6xl font-bold mb-2 group-hover:scale-110 transition-transform">
                {reviews.count}+
              </div>
              <div className="text-xl opacity-90">Recensioni</div>
            </div>
            <div ref={years.ref} className="group">
              <div className="text-6xl font-bold mb-2 group-hover:scale-110 transition-transform">
                {years.count}+
              </div>
              <div className="text-xl opacity-90">Anni di Esperienza</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section ref={about.ref} className={`py-24 bg-white transition-all duration-1000 ${about.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#1a5f7a] font-medium tracking-widest uppercase">Benvenuti</span>
            <h2 className="text-4xl md:text-6xl font-serif text-gray-900 mt-4 mb-6">
              La Locanda del Mare
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#1a5f7a] to-[#2980b9] mx-auto mb-8 rounded-full" />
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Situata sulla splendida spiaggia La Ciaccia a Valledoria, offriamo un&apos;esperienza unica
              che combina cucina di pesce autentica, camere eleganti con vista mare,
              e tramonti mozzafiato sul Mediterraneo.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: '🦞', title: 'Ristorante di Pesce', desc: 'Cucina tradizionale sarda con pesce freschissimo del Mediterraneo' },
              { icon: '🌅', title: 'Tramonti Mozzafiato', desc: 'Cene romantiche con vista sul tramonto mediterraneo' },
              { icon: '🛏️', title: 'Camere Vista Mare', desc: 'Camere eleganti con vista panoramica sulla spiaggia' },
            ].map((item, i) => (
              <div
                key={i}
                className="group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#1a5f7a]/5 to-transparent rounded-bl-full" />
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Restaurant Section with parallax images */}
      <section ref={restaurant.ref} id="ristorante" className={`py-24 bg-gray-50 transition-all duration-1000 ${restaurant.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[#1a5f7a] font-medium tracking-widest uppercase">Gastronomia</span>
              <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mt-4 mb-6">
                Il Nostro Ristorante
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-[#1a5f7a] to-[#2980b9] mb-8 rounded-full" />
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                La nostra cucina celebra i sapori autentici del Mediterraneo con pesce freschissimo
                pescato nelle acque cristalline della Sardegna. Ogni piatto è una celebrazione
                della tradizione marinara sarda.
              </p>

              <div className="space-y-4 mb-10">
                {[
                  { label: 'Colazione', time: '7:30 - 11:00', desc: 'Con vista mare' },
                  { label: 'Pranzo', time: '12:30 - 15:00', desc: 'Menu à la carte' },
                  { label: 'Cena', time: '19:30 - 23:00', desc: 'Pesce fresco del giorno' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                    <div className="w-12 h-12 bg-[#1a5f7a]/10 rounded-full flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-[#1a5f7a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">{item.label} <span className="text-[#1a5f7a]">{item.time}</span></p>
                      <p className="text-sm text-gray-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <a
                href="https://locandadelmare.plateform.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-gradient-to-r from-[#1a5f7a] to-[#2980b9] text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                Prenota il Tuo Tavolo
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="relative h-48 rounded-2xl overflow-hidden shadow-xl group">
                  <Image
                    src="/images/seafood-dish.jpg"
                    alt="Piatto di pesce"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="relative h-64 rounded-2xl overflow-hidden shadow-xl group">
                  <Image
                    src="/images/antipasto-pesce.jpg"
                    alt="Antipasto di mare"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
              <div className="pt-8">
                <div className="relative h-80 rounded-2xl overflow-hidden shadow-xl group">
                  <Image
                    src="/images/hero-sunset-terrace.jpg"
                    alt="Terrazza al tramonto"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rooms Section */}
      <section ref={rooms.ref} id="camere" className={`py-24 bg-white transition-all duration-1000 ${rooms.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#1a5f7a] font-medium tracking-widest uppercase">Ospitalità</span>
            <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mt-4 mb-6">
              Camere & Soggiorno
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#1a5f7a] to-[#2980b9] mx-auto mb-8 rounded-full" />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl group">
              <Image
                src="/images/hero-sunset-terrace.jpg"
                alt="Vista mare dalla camera"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <p className="text-white text-2xl font-serif">Svegliati con il suono delle onde</p>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-gradient-to-br from-[#1a5f7a] to-[#2980b9] p-8 rounded-3xl text-white shadow-xl">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-semibold">Valutazione Eccellente</h3>
                  <div className="flex items-baseline">
                    <span className="text-5xl font-bold">9.1</span>
                    <span className="text-xl ml-1">/10</span>
                  </div>
                </div>
                <p className="opacity-90 mb-4">Basato su 342 recensioni verificate</p>
                <div className="flex items-center">
                  <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Booking.com_2023.svg/200px-Booking.com_2023.svg.png" alt="Booking.com" width={100} height={20} className="brightness-0 invert" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: '🌊', label: 'Vista Mare' },
                  { icon: '🍳', label: 'Colazione Inclusa' },
                  { icon: '📶', label: 'WiFi Gratuito' },
                  { icon: '🅿️', label: 'Parcheggio' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center p-4 bg-gray-50 rounded-xl">
                    <span className="text-2xl mr-3">{item.icon}</span>
                    <span className="font-medium text-gray-700">{item.label}</span>
                  </div>
                ))}
              </div>

              <a
                href="https://locandadelmare.plateform.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-gradient-to-r from-[#1a5f7a] to-[#2980b9] text-white px-8 py-5 rounded-full font-semibold text-center hover:shadow-xl hover:scale-[1.02] transition-all duration-300 text-lg"
              >
                Verifica Disponibilità
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section ref={gallery.ref} id="galleria" className={`py-24 bg-gray-900 transition-all duration-1000 ${gallery.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#1a5f7a] font-medium tracking-widest uppercase">Momenti</span>
            <h2 className="text-4xl md:text-5xl font-serif text-white mt-4 mb-6">
              Galleria
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#1a5f7a] to-[#2980b9] mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              '/images/hero-sunset-terrace.jpg',
              '/images/seafood-dish.jpg',
              '/images/antipasto-pesce.jpg',
              '/images/hero-sunset-terrace.jpg',
            ].map((src, i) => (
              <div
                key={i}
                className={`relative overflow-hidden rounded-2xl group cursor-pointer ${
                  i === 0 ? 'col-span-2 row-span-2 h-96' : 'h-44'
                }`}
              >
                <Image
                  src={src}
                  alt={`Gallery ${i + 1}`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                  <svg className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section ref={contact.ref} id="contatti" className={`py-24 bg-white transition-all duration-1000 ${contact.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <span className="text-[#1a5f7a] font-medium tracking-widest uppercase">Contatti</span>
              <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mt-4 mb-6">
                Vieni a Trovarci
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-[#1a5f7a] to-[#2980b9] mb-8 rounded-full" />

              <div className="space-y-6">
                {[
                  { icon: '📍', label: 'Indirizzo', value: 'Via Ugo Foscolo 11, 07039 Valledoria (SS)', link: 'https://maps.google.com/?q=La+Locanda+del+Mare+Valledoria' },
                  { icon: '📞', label: 'Telefono', value: '+39 079 584 144', link: 'tel:+39079584144' },
                  { icon: '✉️', label: 'Email', value: 'info@lalocandadelmare.it', link: 'mailto:info@lalocandadelmare.it' },
                ].map((item, i) => (
                  <a
                    key={i}
                    href={item.link}
                    className="flex items-start p-6 bg-gray-50 rounded-2xl hover:bg-gray-100 hover:shadow-lg transition-all duration-300 group"
                  >
                    <span className="text-3xl mr-4">{item.icon}</span>
                    <div>
                      <p className="text-sm text-gray-500 uppercase tracking-wide">{item.label}</p>
                      <p className="text-lg font-semibold text-gray-900 group-hover:text-[#1a5f7a] transition-colors">{item.value}</p>
                    </div>
                  </a>
                ))}
              </div>

              <div className="mt-10">
                <a
                  href="https://locandadelmare.plateform.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-gradient-to-r from-[#1a5f7a] to-[#2980b9] text-white px-10 py-5 rounded-full font-semibold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                >
                  Prenota Ora
                  <svg className="w-6 h-6 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Map placeholder */}
            <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl bg-gray-200">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.2!2d8.8276!3d40.9276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12d94b6d4b4b4b4b%3A0x4b4b4b4b4b4b4b4b!2sLa%20Locanda%20del%20Mare!5e0!3m2!1sit!2sit!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
              <Image src="/logo.svg" alt="La Locanda del Mare" width={180} height={70} className="h-14 w-auto brightness-0 invert mb-4" />
              <p className="text-gray-400">Dove il mare incontra la tradizione culinaria sarda</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contatti</h4>
              <p className="text-gray-400">Via Ugo Foscolo 11</p>
              <p className="text-gray-400">07039 Valledoria (SS)</p>
              <p className="text-gray-400 mt-2">+39 079 584 144</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Orari</h4>
              <p className="text-gray-400">Colazione: 7:30 - 11:00</p>
              <p className="text-gray-400">Pranzo: 12:30 - 15:00</p>
              <p className="text-gray-400">Cena: 19:30 - 23:00</p>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-500 text-sm">&copy; {new Date().getFullYear()} La Locanda del Mare. Tutti i diritti riservati.</p>
          </div>
        </div>
      </footer>

      {/* Floating CTA */}
      <div className="fixed bottom-6 right-6 z-50">
        <a
          href="tel:+39079584144"
          className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-[#1a5f7a] to-[#2980b9] text-white rounded-full shadow-2xl hover:scale-110 transition-all duration-300 animate-pulse"
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
        </a>
      </div>

      {/* Custom styles */}
      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        @keyframes wave {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes wave-slow {
          0% { transform: translateX(0); }
          100% { transform: translateX(-30%); }
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in-down {
          from { opacity: 0; transform: translateY(-30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        .animate-float { animation: float ease-in-out infinite; }
        .animate-wave { animation: wave 15s linear infinite; }
        .animate-wave-slow { animation: wave-slow 20s linear infinite; }
        .animate-fade-in-up { animation: fade-in-up 1s ease-out forwards; }
        .animate-fade-in-down { animation: fade-in-down 1s ease-out forwards; }
        .animate-fade-in { animation: fade-in 1s ease-out forwards; opacity: 0; }
        .animate-shimmer {
          background-size: 200% 100%;
          animation: shimmer 3s infinite;
        }
      `}</style>
    </div>
  );
}
