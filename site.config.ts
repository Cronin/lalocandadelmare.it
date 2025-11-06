/**
 * Standalone Site Configuration
 * This site is truly standalone - no middleware or multi-tenant setup needed
 */

export const siteConfig = {
  "id": "elettricista-padova-it",
  "name": "Elettricista Padova",
  "domain": "elettricista-padova.it",
  "serviceType": "electrician",
  "serviceName": "Elettricista",
  "businessName": "Elettricista Padova 24/7",
  "description": "Servizio elettricista a Padova disponibile 24 ore su 24, 7 giorni su 7. Tecnici qualificati per emergenze elettriche, riparazioni e installazioni in tutta Padova e provincia.",
  "phone": "+39 049 123 4567",
  "email": "info@elettricista-padova.it",
  "address": "Via Esempio 123, 35100 Padova PD",
  "logo": "/logo.png",
  "primaryColor": "#0066CC",
  "secondaryColor": "#FFA500",
  "services": [
    "emergenza-24h",
    "riparazione-impianti",
    "installazione-impianti",
    "manutenzione-elettrica",
    "certificazione-impianti",
    "illuminazione",
    "quadri-elettrici",
    "domotica"
  ],
  "serviceArea": {
    "regions": [
      "Veneto"
    ],
    "provinces": [
      "PD"
    ],
    "city": "Padova",
    "neighborhoods": [
      "Centro Storico",
      "Arcella",
      "Voltabarozzo",
      "Guizza",
      "Sacra Famiglia",
      "San Giuseppe",
      "Stanga",
      "Prato della Valle"
    ],
    "notes": "Servizio in tutta Padova e provincia"
  },
  "openingHours": {
    "monday": "24 ore",
    "tuesday": "24 ore",
    "wednesday": "24 ore",
    "thursday": "24 ore",
    "friday": "24 ore",
    "saturday": "24 ore",
    "sunday": "24 ore"
  },
  "priceRange": "€€",
  "contentFocus": {
    "primary": "Professional service with qualified experts",
    "secondary": "Quick response and quality work",
    "tone": "Professional, trustworthy"
  },
  "socialMedia": {
    "facebook": "https://facebook.com/elettricista-padova",
    "instagram": "https://instagram.com/elettricista-padova"
  },
  "seo": {
    "defaultTitle": "Elettricista Padova 24/7 | Pronto Intervento Elettrico",
    "defaultDescription": "Elettricista a Padova disponibile 24h. Intervento rapido per emergenze elettriche, riparazioni, installazioni e certificazioni. Tecnici qualificati in tutta Padova e provincia.",
    "keywords": [
      "elettricista padova",
      "pronto intervento elettricista padova",
      "elettricista 24 ore padova",
      "riparazione impianti elettrici padova",
      "installazione impianti elettrici",
      "emergenza elettricista padova",
      "elettricista urgente padova",
      "certificazione impianti elettrici"
    ]
  },
  "whatsapp": "+393519898686"
,
  "schema": {
    "@context": "https://schema.org",
    "@type": "Electrician",
    "name": "Elettricista Padova",
    "description": "Professional elettricista services in Padova. Available 24/7 for emergencies.",
    "image": "https://elettricista-padova.it/logo.png",
    "logo": "https://elettricista-padova.it/favicon.svg",
    "url": "https://elettricista-padova.it",
    "telephone": "+39 123 456 7890",
    "email": "info@elettricista-padova.it",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Padova",
      "addressRegion": "Padova",
      "addressCountry": "IT"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "45.4064",
      "longitude": "11.8768"
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Padova"
      }
    ],
    "priceRange": "€€",
    "openingHours": "Mo-Su 00:00-24:00",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "08:00",
        "closes": "20:00"
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Elettricista Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Elettricista Service",
            "description": "Professional elettricista service"
          }
        }
      ]
    },
    "paymentAccepted": "Cash, Credit Card, Bank Transfer",
    "currenciesAccepted": "EUR",
    "availableLanguage": "Italian"
  }
};

export default siteConfig;
