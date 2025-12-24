import type { Metadata } from "next";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://elettricista-padova.it"),
  title: {
    default: "Elettricista Padova 24/7 | Pronto Intervento Elettrico",
    template: "%s | Elettricista Padova",
  },
  description: "Elettricista a Padova disponibile 24h. Intervento rapido per emergenze elettriche, riparazioni, installazioni e certificazioni. Tecnici qualificati in tutta Padova e provincia.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="it" className="scroll-smooth">
      <head>
        {/* Google Tag Manager */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-M6TGSW67');
            `,
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-M6TGSW67"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {children}
        <Analytics />
        <SpeedInsights />
      
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Elettricista Padova",
  "url": "https://elettricista-padova.it",
  "logo": "https://elettricista-padova.it/logo.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+39 123 456 7890",
    "contactType": "customer service",
    "areaServed": "IT",
    "availableLanguage": [
      "it"
    ]
  }
})
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "url": "https://elettricista-padova.it",
  "name": "Elettricista Padova",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://elettricista-padova.it/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
})
          }}
        />
            {/* Microsoft Clarity */}
      <Script
        id="clarity-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "u1ur4kb2kq");
          `,
        }}
      />

        <!-- Google Analytics -->
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-E013LYXKC9"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-E013LYXKC9', {
              page_path: window.location.pathname,
            });
          `}
        </Script>

      </body>
    </html>
  );
}
