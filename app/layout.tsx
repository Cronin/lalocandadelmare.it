import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });

export const metadata: Metadata = {
  title: 'La Locanda del Mare - Ristorante & Hotel sul Mare | Valledoria, Sardegna',
  description: 'Ristorante di pesce e hotel sulla spiaggia La Ciaccia a Valledoria. Cucina tradizionale sarda, camere vista mare, tramonti mozzafiato. Prenota ora!',
  keywords: 'ristorante mare valledoria, hotel spiaggia sardegna, ristorante pesce valledoria, la ciaccia, locanda del mare, sardegna nord, vacanze sardegna',
  openGraph: {
    title: 'La Locanda del Mare - Ristorante & Hotel | Valledoria',
    description: 'Ristorante di pesce e hotel sulla spiaggia La Ciaccia. Cucina tradizionale sarda e tramonti mozzafiato.',
    url: 'https://lalocandadelmare.it',
    siteName: 'La Locanda del Mare',
    locale: 'it_IT',
    type: 'website',
  },
  icons: {
    icon: '/favicon.svg',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="it" className={`${playfair.variable} scroll-smooth`}>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
