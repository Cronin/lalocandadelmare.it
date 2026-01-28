import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });

export const metadata: Metadata = {
  title: 'La Locanda del Mare - Ristorante & Hotel Valledoria',
  description: 'Ristorante e hotel sulla spiaggia La Ciaccia a Valledoria, Sardegna',
  icons: {
    icon: '/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="it" className={playfair.variable}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
