import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Undangan Buka Bersama Ramadhan 1447 H',
  description: 'Undangan eksklusif Buka Bersama Ramadhan 1447 H — sebuah momen kebersamaan yang hangat dan penuh berkah.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body
        className={cn(
          inter.variable,
          playfair.variable,
          'font-sans antialiased bg-[#F6F1E8] text-[#2C2C2C]'
        )}
      >
        {children}
      </body>
    </html>
  );
}
